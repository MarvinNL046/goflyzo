import { anthropic } from '@/lib/ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

import { supabase } from '@/lib/supabase';

const MAX_MESSAGE_LENGTH = 500; // characters
const MAX_MESSAGES_PER_HOUR = 20;
const MIN_COOLDOWN_MS = 2000; // 2 seconds

async function isRateLimited(userId: string): Promise<boolean> {
  const now = new Date();
  const hourAgo = new Date(now.getTime() - 3600000); // 1 hour ago

  try {
    // Get current hour's rate limit record
    const { data: rateLimit, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('*')
      .eq('user_id', userId)
      .gte('hour_start', hourAgo.toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (rateLimitError && rateLimitError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      console.error('Error checking rate limit:', rateLimitError);
      return true; // Fail safe: treat as rate limited if error
    }

    // Get user's last message timestamp
    const { data: lastMessage, error: messageError } = await supabase
      .from('chat_messages')
      .select('created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (messageError && messageError.code !== 'PGRST116') {
      console.error('Error checking last message:', messageError);
      return true;
    }

    // Check cooldown period
    if (lastMessage) {
      const lastMessageTime = new Date(lastMessage.created_at).getTime();
      if (now.getTime() - lastMessageTime < MIN_COOLDOWN_MS) {
        return true;
      }
    }

    if (!rateLimit) {
      // Create new rate limit record for this hour
      const { error: insertError } = await supabase
        .from('rate_limits')
        .insert([{
          user_id: userId,
          hour_start: now.toISOString(),
          message_count: 1
        }]);

      if (insertError) {
        console.error('Error creating rate limit record:', insertError);
        return true;
      }

      return false;
    }

    // Check if over limit
    if (rateLimit.message_count >= MAX_MESSAGES_PER_HOUR) {
      return true;
    }

    // Update message count
    const { error: updateError } = await supabase
      .from('rate_limits')
      .update({ message_count: rateLimit.message_count + 1 })
      .eq('id', rateLimit.id);

    if (updateError) {
      console.error('Error updating rate limit:', updateError);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error in rate limiting:', error);
    return true;
  }
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new NextResponse(
      JSON.stringify({ error: 'ANTHROPIC_API_KEY is not configured' }),
      { status: 500 }
    );
  }

  try {
    const requestData = await request.json();
    console.log('Received request:', requestData);
    const { content: userMessage, relevantArticles, userId } = requestData;
    console.log('Parsed request data:', { userMessage, relevantArticles, userId });

    // Check message length
    if (userMessage.length > MAX_MESSAGE_LENGTH) {
      return new NextResponse(
        JSON.stringify({ 
          error: `Message too long. Maximum length is ${MAX_MESSAGE_LENGTH} characters.` 
        }),
        { status: 400 }
      );
    }

    // Check rate limiting
    if (!userId) {
      return new NextResponse(
        JSON.stringify({ error: 'User ID is required' }),
        { status: 401 }
      );
    }

    if (await isRateLimited(userId)) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Rate limit exceeded. Please wait before sending more messages.' 
        }),
        { status: 429 }
      );
    }

    console.log('Creating Anthropic message...');
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `
          Context: You are Kai, the friendly AI travel assistant for GoFlyzo. Your name means "ocean" in Hawaiian, reflecting your vast knowledge of travel destinations worldwide. You're helpful, friendly, and passionate about helping travelers have amazing experiences.
          
          ${relevantArticles && relevantArticles.length > 0 ? `
            Use the following relevant articles to help answer the user's question:
            ${relevantArticles.map((article: { title: string; content: string }) => `
              Title: ${article.title}
              Content: ${article.content}
            `).join('\n')}
          ` : ''}
          
          User message: ${userMessage}
          
          Provide a helpful and friendly response${relevantArticles && relevantArticles.length > 0 ? ' using the context and knowledge base information' : ''}.
        `
      }]
    });

    console.log('Anthropic response:', response);
    
    // Handle the response content properly
    if (!response.content || response.content.length === 0) {
      throw new Error('Empty response from Anthropic API');
    }

    // Extract text from the first content block
    const firstContent = response.content[0];
    if (!firstContent || firstContent.type !== 'text') {
      throw new Error('Invalid response format from Anthropic API');
    }

    return NextResponse.json({ content: firstContent.text });
  } catch (error) {
    console.error('Detailed error in chat API:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}

import { anthropic } from '@/lib/ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const MAX_MESSAGE_LENGTH = 500; // characters
const MIN_COOLDOWN = 2000; // 2 seconds in milliseconds

// Simple in-memory store for rate limiting
// In production, you'd want to use Redis or a database
const messageTimestamps = new Map<string, number[]>();

function isRateLimited(sessionId: string): boolean {
  const now = Date.now();
  const timestamps = messageTimestamps.get(sessionId) || [];
  
  // Clean up old timestamps (older than 1 hour)
  const recentTimestamps = timestamps.filter(ts => now - ts < 3600000);
  
  // Check if more than 20 messages in the last hour
  if (recentTimestamps.length >= 20) {
    return true;
  }
  
  // Check cooldown period
  if (recentTimestamps.length > 0 && 
      now - recentTimestamps[recentTimestamps.length - 1] < MIN_COOLDOWN) {
    return true;
  }
  
  // Update timestamps
  messageTimestamps.set(sessionId, [...recentTimestamps, now]);
  return false;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new NextResponse(
      JSON.stringify({ error: 'ANTHROPIC_API_KEY is not configured' }),
      { status: 500 }
    );
  }

  try {
    const { content, relevantArticles, sessionId } = await request.json();

    // Check message length
    if (content.length > MAX_MESSAGE_LENGTH) {
      return new NextResponse(
        JSON.stringify({ 
          error: `Message too long. Maximum length is ${MAX_MESSAGE_LENGTH} characters.` 
        }),
        { status: 400 }
      );
    }

    // Check rate limiting
    if (isRateLimited(sessionId)) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Rate limit exceeded. Please wait before sending more messages.' 
        }),
        { status: 429 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `
          Context: You are Kai, the friendly AI travel assistant for GoFlyzo. Your name means "ocean" in Hawaiian, reflecting your vast knowledge of travel destinations worldwide. You're helpful, friendly, and passionate about helping travelers have amazing experiences. Use the following relevant articles to help answer the user's question:
          ${relevantArticles.map((article: { title: string; content: string }) => `
            Title: ${article.title}
            Content: ${article.content}
          `).join('\n')}
          
          User message: ${content}
          
          Provide a helpful response using the context and knowledge base information.
        `
      }]
    });

    return NextResponse.json({ content: response.content });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}

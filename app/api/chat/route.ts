import { anthropic } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { content, relevantArticles } = await request.json();

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

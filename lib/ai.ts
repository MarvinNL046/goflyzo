import { Anthropic } from '@anthropic-ai/sdk';

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error('Missing ANTHROPIC_API_KEY environment variable');
}

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  defaultHeaders: {
    'anthropic-version': '2023-06-01'
  }
});

export async function generateLocationContent(country: string) {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `Generate a comprehensive travel guide for ${country}. Include detailed information about the country's history, culture, attractions, and practical travel information.`
      }]
    });

    return response;
  } catch (error) {
    console.error('Error generating location content:', error);
    throw error;
  }
}

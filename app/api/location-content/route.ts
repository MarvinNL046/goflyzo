import { getServerSupabase } from '@/lib/supabase';
import { generateLocationContent } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');

  if (!country) {
    return NextResponse.json({ error: 'Country parameter is required' }, { status: 400 });
  }

  try {
    const supabase = await getServerSupabase();
    const { data, error } = await supabase
      .from('location_content')
      .select('*')
      .eq('country', country.toLowerCase())
      .order('last_updated', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (data) {
      return NextResponse.json(data);
    }

    // If no content exists, generate it using AI
    try {
      const response = await generateLocationContent(country);
      
      // Save the generated content
      const { data: newContent, error: insertError } = await supabase
        .from('location_content')
        .insert([{
          country: country.toLowerCase(),
          content: response.content,
          last_updated: new Date().toISOString()
        }])
        .select()
        .single();

      if (insertError) {
        throw insertError;
      }

      return NextResponse.json(newContent);
    } catch (aiError) {
      console.error('Error generating location content:', aiError);
      return NextResponse.json(
        { error: 'Failed to generate location content' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Error fetching location content:', err);
    return NextResponse.json(
      { error: 'Failed to fetch location content' },
      { status: 500 }
    );
  }
}

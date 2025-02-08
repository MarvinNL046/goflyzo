import { getServerSupabase } from '@/lib/supabase';
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

    return NextResponse.json(data);
  } catch (err) {
    console.error('Error fetching location content:', err);
    return NextResponse.json(
      { error: 'Failed to fetch location content' },
      { status: 500 }
    );
  }
}

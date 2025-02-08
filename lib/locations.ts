import { getServerSupabase } from './supabase';

export interface Location {
  country: string;
  city: string;
  description: string;
  image: string;
  services: string;
}

export async function getAllLocations(): Promise<Location[]> {
  const supabase = await getServerSupabase();
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .order('country', { ascending: true });

  if (error) {
    console.error('[Locations] Error fetching locations:', error);
    return [];
  }

  return data;
}

export async function getAllCountries(): Promise<string[]> {
  const supabase = await getServerSupabase();
  const { data, error } = await supabase
    .from('locations')
    .select('country')
    .order('country');

  if (error) {
    console.error('[Locations] Error fetching countries:', error);
    return [];
  }

  return Array.from(new Set(data.map(loc => loc.country))).sort();
}

export async function getLocationsByCountry(country: string): Promise<Location[]> {
  const supabase = await getServerSupabase();
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .ilike('country', country)
    .order('city');

  if (error) {
    console.error(`[Locations] Error fetching locations for country ${country}:`, error);
    return [];
  }

  return data;
}

export async function getLocationByCountryAndCity(country: string, city: string): Promise<Location | null> {
  const supabase = await getServerSupabase();
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .ilike('country', country)
    .ilike('city', city)
    .single();

  if (error) {
    console.error(`[Locations] Error fetching location for ${city}, ${country}:`, error);
    return null;
  }

  return data;
}

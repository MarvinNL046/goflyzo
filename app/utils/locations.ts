import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface LocationData {
  country: string;
  city: string;
  description: string;
  image: string;
  services: string[];
}

export interface ProcessedLocation extends LocationData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
}

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function logError(message: string, error: unknown) {
  console.error(`[Locations Error] ${message}:`, error);
  if (error instanceof Error) {
    console.error('Stack trace:', error.stack);
  }
}

export function getAllLocations(): ProcessedLocation[] {
  try {
    // Get CSV file path
    const csvPath = path.join(process.cwd(), 'data', 'csv', 'locations.csv');
    
    // Check if file exists
    if (!fs.existsSync(csvPath)) {
      throw new Error(`CSV file not found at path: ${csvPath}`);
    }

    // Read and parse CSV
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    console.log('[Locations] Successfully read CSV file');
    
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ',',
      quote: '"',
      trim: true
    }) as Array<{
      country: string;
      city: string;
      description: string;
      image: string;
      services: string;
    }>;

    console.log(`[Locations] Successfully parsed ${records.length} records from CSV`);

    // Process records
    return records.map(record => {
      // Validate required fields
      if (!record.country || !record.city || !record.description || !record.image || !record.services) {
        throw new Error(`Missing required fields in record: ${JSON.stringify(record)}`);
      }

      // Process services
      const services = record.services
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);

      return {
        country: record.country,
        city: record.city,
        description: record.description,
        image: record.image,
        services,
        slug: createSlug(`${record.country}-${record.city}`),
        meta: {
          title: `Travel Guide to ${record.city}, ${record.country} | GoFlyzo`,
          description: record.description
        }
      };
    });
  } catch (error) {
    logError('Error reading locations', error);
    return [];
  }
}

export function getLocationBySlug(countrySlug: string, citySlug: string): ProcessedLocation | null {
  try {
    const locations = getAllLocations();
    return locations.find(
      location => 
        createSlug(location.country) === countrySlug && 
        createSlug(location.city) === citySlug
    ) || null;
  } catch (error) {
    logError('Error getting location by slug', error);
    return null;
  }
}

export function getCountries(): string[] {
  try {
    const locations = getAllLocations();
    const countries = Array.from(new Set(locations.map(loc => loc.country))).sort();
    console.log(`[Locations] Found ${countries.length} unique countries`);
    return countries;
  } catch (error) {
    logError('Error getting countries', error);
    return [];
  }
}

export function getLocationsByCountry(country: string): ProcessedLocation[] {
  try {
    const locations = getAllLocations();
    const countryLocations = locations.filter(loc => loc.country === country);
    console.log(`[Locations] Found ${countryLocations.length} locations for country: ${country}`);
    return countryLocations;
  } catch (error) {
    logError('Error getting locations by country', error);
    return [];
  }
}

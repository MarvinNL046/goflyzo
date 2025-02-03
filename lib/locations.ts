import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Location {
  country: string;
  city: string;
  description: string;
  image: string;
  services: string;
}

interface LocationData {
  locations: Location[];
  countries: string[];
}

let locationData: LocationData | null = null;

function readCSV(): Location[] {
  console.log('[Locations] Successfully read CSV file');
  const filePath = path.join(process.cwd(), 'data', 'csv', 'locations.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  console.log(`[Locations] Successfully parsed ${records.length} records from CSV`);
  return records;
}

function getLocationData(): LocationData {
  if (locationData) return locationData;

  const locations = readCSV();
  const countries = Array.from(new Set(locations.map(loc => loc.country))).sort();
  console.log(`[Locations] Found ${countries.length} unique countries`);

  locationData = { locations, countries };
  return locationData;
}

export function getAllLocations(): Location[] {
  return getLocationData().locations;
}

export function getAllCountries(): string[] {
  return getLocationData().countries;
}

export function getLocationsByCountry(country: string): Location[] {
  const locations = getAllLocations().filter(
    loc => loc.country.toLowerCase() === country.toLowerCase()
  );
  console.log(`[Locations] Found ${locations.length} locations for country: ${country}`);
  return locations;
}

export function getLocationByCountryAndCity(country: string, city: string): Location | null {
  return getAllLocations().find(
    loc => 
      loc.country.toLowerCase() === country.toLowerCase() && 
      loc.city.toLowerCase() === city.toLowerCase()
  ) || null;
}

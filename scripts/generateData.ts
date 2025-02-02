const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

interface LocationData {
  country: string;
  city: string;
  description: string;
  image: string;
  services: string[];
}

interface ProcessedLocation extends LocationData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
}

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function processLocation(data: LocationData): ProcessedLocation {
  return {
    ...data,
    slug: createSlug(`${data.country}-${data.city}`),
    services: data.services.toString().split(',').map(s => s.trim()),
    meta: {
      title: `Travel Guide to ${data.city}, ${data.country} | GoFlyzo`,
      description: data.description
    }
  };
}

async function generateLocationFiles() {
  try {
    // Create directories if they don't exist
    const jsonDir = path.join(process.cwd(), 'data', 'json');
    fs.mkdirSync(jsonDir, { recursive: true });

    // Read CSV file
    const csvPath = path.join(process.cwd(), 'data', 'csv', 'locations.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    
    // Parse CSV data
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true
    }) as LocationData[];

    // Process each location
    const locations = records.map(processLocation);

    // Generate individual JSON files for each location
    locations.forEach(location => {
      const fileName = `${location.slug}.json`;
      const filePath = path.join(jsonDir, fileName);
      fs.writeFileSync(filePath, JSON.stringify(location, null, 2));
    });

    // Generate index file
    const indexPath = path.join(jsonDir, 'locations-index.json');
    const indexData = {
      total: locations.length,
      locations: locations.map(loc => ({
        country: loc.country,
        city: loc.city,
        slug: loc.slug,
        url: `/locations/${createSlug(loc.country)}/${createSlug(loc.city)}`
      }))
    };
    fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2));

    // Generate countries index
    const countriesData = Array.from(new Set(locations.map(loc => loc.country))).sort();
    const countriesPath = path.join(jsonDir, 'countries.json');
    fs.writeFileSync(countriesPath, JSON.stringify(countriesData, null, 2));

    console.log(`✓ Generated ${locations.length} location files`);
    console.log(`✓ Generated locations index`);
    console.log(`✓ Generated countries index`);
  } catch (error) {
    console.error('Error generating location files:', error);
    process.exit(1);
  }
}

// Run the script
generateLocationFiles();

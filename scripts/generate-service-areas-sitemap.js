import fs from 'fs';
import path from 'path';
import pkg from 'papaparse';
const { parse } = pkg;

function generateServiceAreasSitemap() {
  // Read the CSV file
  const csvContent = fs.readFileSync(path.join(process.cwd(), 'data', 'csv', 'locations.csv'), 'utf-8');
  
  // Parse CSV content
  const { data } = parse(csvContent, {
    header: true,
    skipEmptyLines: true
  });

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each location
  for (const row of data) {
    const countrySlug = row.country.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    const citySlug = row.city.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Add country page
    sitemap += `
  <url>
    <loc>https://goflyzo.com/locations/${countrySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Add city page
    sitemap += `
  <url>
    <loc>https://goflyzo.com/locations/${countrySlug}/${citySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/service-areas-sitemap.xml', sitemap);
  console.log('Service areas sitemap generated successfully!');
}

generateServiceAreasSitemap();

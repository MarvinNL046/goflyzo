import { getAllLocations } from '@/lib/locations';

export async function GET() {
  const locations = await getAllLocations();
  const baseUrl = 'https://goflyzo.com';

  // Group locations by country
  const countries = new Map<string, typeof locations>();
  locations.forEach((location) => {
    if (!countries.has(location.country)) {
      countries.set(location.country, []);
    }
    countries.get(location.country)?.push(location);
  });

  // Create sitemap entries
  const sitemapEntries: string[] = [];

  // Add main locations page
  sitemapEntries.push(`
    <url>
      <loc>${baseUrl}/locations</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `);

  // Add country pages
  Array.from(countries.entries()).forEach(([country, locations]) => {
    const countrySlug = encodeURIComponent(country.toLowerCase());
    sitemapEntries.push(`
      <url>
        <loc>${baseUrl}/locations/${countrySlug}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `);

    // Add city pages for each country
    locations.forEach(location => {
      const citySlug = encodeURIComponent(location.city.toLowerCase());
      sitemapEntries.push(`
        <url>
          <loc>${baseUrl}/locations/${countrySlug}/${citySlug}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.6</priority>
          <image:image>
            <image:loc>${location.image}</image:loc>
            <image:title>${location.city}, ${location.country}</image:title>
            <image:caption>${location.description}</image:caption>
          </image:image>
        </url>
      `);
    });
  });

  // Create the final sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${sitemapEntries.join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

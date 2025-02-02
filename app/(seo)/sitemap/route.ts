import { NextResponse } from "next/server";
import { getAllLocations, createSlug } from "../../utils/locations";

export async function GET() {
  try {
    // Get all locations
    const locations = getAllLocations();

    // Static routes
    const staticRoutes = [
      {
        loc: 'https://goflyzo.com',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 1.0
      },
      {
        loc: 'https://goflyzo.com/contact',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.5
      },
      {
        loc: 'https://goflyzo.com/locations',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.9
      }
    ];

    // Service routes
    const services = [
      'hotels',
      'flights',
      'esims',
      'travel-insurance',
      'car-rental',
      'ferry-services',
      'taxi-services',
      'train-services',
      'travel-products'
    ];

    const serviceRoutes = services.map(service => ({
      loc: `https://goflyzo.com/services/${service}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.8
    }));

    // Location routes
    const locationRoutes = locations.map(location => ({
      loc: `https://goflyzo.com/locations/${createSlug(location.country)}/${createSlug(location.city)}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.7
    }));

    // Combine all routes
    const routes = [...staticRoutes, ...serviceRoutes, ...locationRoutes];

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>${route.loc}</loc>
          <lastmod>${route.lastmod}</lastmod>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

    // Return the sitemap with proper headers
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}

import { getAllLocations } from '@/lib/locations';

export async function GET() {
  const locations = await getAllLocations();
  const staticUrls = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/contact', priority: 0.5, changefreq: 'monthly' },
    { loc: '/locations', priority: 0.8, changefreq: 'weekly' },
    { loc: '/airalo', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/hotels', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/flights', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/esims', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/travel-insurance', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/car-rental', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/ferry-services', priority: 0.8, changefreq: 'weekly' },
    { loc: '/services/travel-products', priority: 0.8, changefreq: 'weekly' },
  ];

  const locationUrls = locations.map(location => ({
    loc: `/locations/${encodeURIComponent(location.country.toLowerCase())}/${encodeURIComponent(location.city.toLowerCase())}`,
    priority: 0.7,
    changefreq: 'weekly',
  }));

  const allUrls = [...staticUrls, ...locationUrls];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>https://goflyzo.com${url.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

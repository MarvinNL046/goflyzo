import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://goflyzo.com';
const PUBLIC_DIR = path.join(dirname(__dirname), 'public');

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.9, changefreq: 'daily' },
  { path: '/locations', priority: 0.9, changefreq: 'daily' },
  { path: '/services/flights', priority: 0.9, changefreq: 'daily' },
  { path: '/services/hotels', priority: 0.9, changefreq: 'daily' },
  { path: '/services/car-rental', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/ferry-services', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/train-services', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/taxi-services', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/travel-insurance', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/travel-products', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/esims', priority: 0.8, changefreq: 'weekly' },
  { path: '/airalo', priority: 0.8, changefreq: 'weekly' },
  { path: '/yesim', priority: 0.8, changefreq: 'weekly' },
  { path: '/privacy', priority: 0.5, changefreq: 'monthly' },
  { path: '/terms', priority: 0.5, changefreq: 'monthly' },
];

function generateSitemapXML() {
  const today = new Date().toISOString().split('T')[0];
  
  const urlset = staticRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}

function generateXSLStylesheet() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>GoFlyzo XML Sitemap</title>
        <style>
          body { font-family: -apple-system, system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th, td { padding: 0.5rem; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f5f5f5; }
          tr:hover { background: #f9f9f9; }
        </style>
      </head>
      <body>
        <h1>GoFlyzo XML Sitemap</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;
}

// Generate and save the sitemap
const sitemap = generateSitemapXML();
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);

// Generate and save the XSL stylesheet
const xsl = generateXSLStylesheet();
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xsl'), xsl);

console.log('Sitemap and XSL stylesheet generated successfully!');

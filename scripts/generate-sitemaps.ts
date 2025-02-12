import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { BlogPost, getAllPosts } from '../lib/blog.js';
import { Location, getAllLocations } from '../lib/locations.js';

// Current constants and types
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const XML_DECLARATION = '<?xml version="1.0" encoding="UTF-8"?>';
const BASE_URL = 'https://goflyzo.com';
const PUBLIC_DIR = path.join(dirname(__dirname), 'public');

// Define the type for changefreq
type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

// The type for a sitemap URL
interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: ChangeFreq;
  priority?: number;
  image?: {
    loc: string;
    title: string;
    caption?: string;
  };
}

// Function to write an XML file
function writeXMLFile(filePath: string, content: string): void {
  const xmlContent = `${XML_DECLARATION}${content}`;
  fs.writeFileSync(filePath, xmlContent, { encoding: 'utf8' });
}

// Function to build the sitemap XML
function generateSitemapXML(urls: SitemapURL[], includeImages: boolean = false): string {
  const today = new Date().toISOString().split('T')[0];

  let xmlNamespaces = 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
  if (includeImages) {
    xmlNamespaces += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
  }

  return `<urlset ${xmlNamespaces}>
${urls.map(url => `  <url>
    <loc>${url.loc.startsWith('http') ? url.loc : `${BASE_URL}${url.loc}`}</loc>
    <lastmod>${url.lastmod || today}</lastmod>${url.changefreq ? `
    <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority !== undefined ? `
    <priority>${url.priority.toFixed(1)}</priority>` : ''}${url.image ? `
    <image:image>
      <image:loc>${url.image.loc}</image:loc>
      <image:title>${url.image.title}</image:title>${url.image.caption ? `
      <image:caption>${url.image.caption}</image:caption>` : ''}
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;
}

/**
 * Recursive function to find all page.tsx files in a directory.
 * @param dir The directory to search.
 * @returns An array of file paths.
 */
function findPageFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      // Skip certain directories
      if (!file.startsWith('(') && !file.startsWith('api')) {
        results = results.concat(findPageFiles(fullPath));
      }
    } else if (stat && stat.isFile() && file === 'page.tsx') {
      results.push(fullPath);
    }
  });
  return results;
}

/**
 * Function to extract a route from a page.tsx file path.
 * For example, 'app/services/esims/page.tsx' becomes '/services/esims'.
 * @param filePath The full file path.
 * @param appDir The base path of the app directory.
 * @returns The extracted route.
 */
function extractRoute(filePath: string, appDir: string): string {
  // Get the relative path from the app directory
  let relativePath = path.relative(appDir, filePath);
  // Replace Windows backslashes with forward slashes
  relativePath = relativePath.replace(/\\/g, '/');
  // Remove the filename ('page.tsx')
  let route = relativePath.replace(/\/?page\.tsx$/, '');
  // Add a leading slash
  route = '/' + route;
  // If the route is '/index', make it root
  if (route === '/index') route = '/';
  // Ensure no double slashes
  return route.replace(/\/+/g, '/');
}

/**
 * Scans the app directory and returns a list of routes (and their configuration)
 */
function getDynamicRoutes(): SitemapURL[] {
  const appDir = path.join(dirname(__dirname), 'app');
  const pageFiles = findPageFiles(appDir);
  const routes: string[] = pageFiles
    .map(filePath => extractRoute(filePath, appDir))
    // Filter out dynamic route patterns and special routes
    .filter(route => !route.includes('[') && !route.includes('(') && !route.includes('api'));

  // Configuration object per route
  const routeConfig: { [route: string]: { priority?: number; changefreq?: ChangeFreq } } = {
    '/': { priority: 1.0, changefreq: 'weekly' },
    '/contact': { priority: 0.5, changefreq: 'monthly' },
    '/locations': { priority: 0.8, changefreq: 'weekly' },
    '/airalo': { priority: 0.8, changefreq: 'weekly' },
    '/blog': { priority: 0.8, changefreq: 'weekly' },
    '/services/esims': { priority: 0.9, changefreq: 'weekly' },
    '/services/hotels': { priority: 0.9, changefreq: 'weekly' },
    '/services/flights': { priority: 0.9, changefreq: 'weekly' },
    '/services/travel-insurance': { priority: 0.9, changefreq: 'weekly' },
    '/services/car-rental': { priority: 0.9, changefreq: 'weekly' },
    '/services/ferry-services': { priority: 0.9, changefreq: 'weekly' },
    '/services/train-services': { priority: 0.9, changefreq: 'weekly' },
    '/services/taxi-services': { priority: 0.9, changefreq: 'weekly' },
    '/services/travel-products': { priority: 0.9, changefreq: 'weekly' },
    '/yesim': { priority: 0.9, changefreq: 'weekly' },
  };

  // Default settings for routes not in the configuration
  const defaultConfig = { priority: 0.5, changefreq: 'weekly' as ChangeFreq };

  // Build the array of SitemapURL objects
  return routes.map(route => {
    const config = routeConfig[route] || defaultConfig;
    return {
      loc: route,
      priority: config.priority,
      changefreq: config.changefreq,
    } as SitemapURL;
  });
}

/**
 * Generates the main sitemap using dynamically found routes.
 */
function generateDynamicMainSitemap(): void {
  const dynamicRoutes = getDynamicRoutes();
  const sitemap = generateSitemapXML(dynamicRoutes);
  writeXMLFile(path.join(PUBLIC_DIR, 'main-sitemap.xml'), sitemap);
}

/**
 * Generate blog sitemap
 */
async function generateBlogSitemap(): Promise<void> {
  const posts = await getAllPosts();
  const urls: SitemapURL[] = [
    { loc: '/blog', priority: 0.8, changefreq: 'daily' as ChangeFreq },
    ...posts.map((post: BlogPost) => ({
      loc: `/blog/${post.slug}`,
      priority: 0.7,
      changefreq: 'weekly' as ChangeFreq,
    })),
  ];

  const sitemap = generateSitemapXML(urls);
  writeXMLFile(path.join(PUBLIC_DIR, 'blog-sitemap.xml'), sitemap);
}

/**
 * Generate locations sitemap
 */
async function generateLocationsSitemap(): Promise<void> {
  const locations = await getAllLocations();
  const urls: SitemapURL[] = locations.map((location: Location) => ({
    loc: `/locations/${encodeURIComponent(location.country.toLowerCase())}/${encodeURIComponent(location.city.toLowerCase())}`,
    priority: 0.6,
    changefreq: 'weekly' as ChangeFreq,
    image: {
      loc: location.image,
      title: `${location.city}, ${location.country}`,
      caption: location.description,
    },
  }));

  const sitemap = generateSitemapXML(urls, true);
  writeXMLFile(path.join(PUBLIC_DIR, 'locations-sitemap.xml'), sitemap);
}

/**
 * Generate service areas sitemap
 */
async function generateServiceAreasSitemap(): Promise<void> {
  const locations = await getAllLocations();
  const countries = new Map<string, Location[]>();
  
  // Group locations by country
  locations.forEach((location: Location) => {
    if (!countries.has(location.country)) {
      countries.set(location.country, []);
    }
    countries.get(location.country)?.push(location);
  });

  const urls: SitemapURL[] = [];

  // Add country pages
  Array.from(countries.entries()).forEach(([country, locations]) => {
    const countrySlug = encodeURIComponent(country.toLowerCase());
    urls.push({
      loc: `/locations/${countrySlug}`,
      priority: 0.8,
      changefreq: 'weekly' as ChangeFreq,
    });

    // Add city pages for each country
    locations.forEach((location: Location) => {
      const citySlug = encodeURIComponent(location.city.toLowerCase());
      urls.push({
        loc: `/locations/${countrySlug}/${citySlug}`,
        priority: 0.7,
        changefreq: 'weekly' as ChangeFreq,
      });
    });
  });

  const sitemap = generateSitemapXML(urls);
  writeXMLFile(path.join(PUBLIC_DIR, 'service-areas-sitemap.xml'), sitemap);
}

/**
 * Generate sitemap index
 */
function generateSitemapIndex(): void {
  const today = new Date().toISOString().split('T')[0];
  const sitemaps = [
    'main-sitemap.xml',
    'blog-sitemap.xml',
    'locations-sitemap.xml',
    'service-areas-sitemap.xml',
  ];

  const index = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${BASE_URL}/${sitemap}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  writeXMLFile(path.join(PUBLIC_DIR, 'sitemap.xml'), index);
}

/**
 * Generate all sitemaps
 */
async function generateAllSitemaps(): Promise<void> {
  console.log('Generating sitemaps...');
  
  generateDynamicMainSitemap();
  await generateBlogSitemap();
  await generateLocationsSitemap();
  await generateServiceAreasSitemap();
  generateSitemapIndex();
  
  console.log('All sitemaps generated successfully!');
}

// Execute if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAllSitemaps().catch(console.error);
}

export { generateAllSitemaps };

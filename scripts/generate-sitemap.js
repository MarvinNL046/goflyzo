import fs from 'fs';
import path from 'path';

// Function to get all TSX files from a directory recursively
function getTsxFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('api') && !file.startsWith('_') && !file.startsWith('(')) {
      results = results.concat(getTsxFiles(filePath));
    } else if (file === 'page.tsx') {
      results.push(filePath);
    }
  }
  
  return results;
}

// Convert file path to URL
function filePathToUrl(filePath) {
  // Convert Windows path separators to forward slashes
  filePath = filePath.replace(/\\/g, '/');
  
  // Extract the relative path from app directory
  const appIndex = filePath.indexOf('app/');
  if (appIndex === -1) return null;
  
  let url = filePath.slice(appIndex + 'app/'.length);
  
  // Remove page.tsx from the end
  url = url.replace('/page.tsx', '');
  
  // Skip root page.tsx as it's already handled by homepage
  if (url === 'page.tsx') {
    return null;
  }
  
  // Handle dynamic routes - skip them as they'll be handled by specific sitemaps
  if (url.includes('[') && url.includes(']')) {
    return null;
  }

  // Convert PascalCase to kebab-case if needed
  url = url.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

  return `https://goflyzo.com/${url}`; 
}

// Generate sitemap XML content
function generateSitemap(files) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://goflyzo.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add all pages
  for (const file of files) {
    const url = filePathToUrl(file);
    if (url) {
      const urlPath = url.replace('https://goflyzo.com', '');
      const mainPages = ['/', '/services', '/blog', '/contact', '/locations'];
      const isMainPage = mainPages.includes(urlPath);
      
      // Skip certain pages
      const skipPages = [
        '/api',
        '/(seo)',
        '/context'
      ];
      
      let shouldSkip = false;
      for (const skipPage of skipPages) {
        if (urlPath.startsWith(skipPage)) {
          shouldSkip = true;
          break;
        }
      }

      if (!shouldSkip) {
        let priority = '0.8';
        let changefreq = 'monthly';

        if (isMainPage) {
          priority = '0.9';
          changefreq = 'weekly';
        } else if (urlPath.startsWith('/blog/')) {
          priority = '0.7';
          changefreq = 'monthly';
        }

        sitemap += `
  <url>
    <loc>${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      }
    }
  }

  sitemap += '\n</urlset>';
  return sitemap;
}

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getTsxFiles(appDir);
const sitemap = generateSitemap(files);

// Write to public directory
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}
fs.writeFileSync('public/sitemap.xml', sitemap);

console.log('Sitemap generated successfully!');

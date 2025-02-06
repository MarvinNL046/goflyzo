import fs from 'fs';
import path from 'path';

function generateProductsSitemap() {
  // Read the products data
  const productsData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data', 'json', 'travel-products.json'), 'utf-8')
  );

  // Get unique categories
  const categories = [...new Set(productsData.products.map(product => product.category))];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main products page -->
  <url>
    <loc>https://goflyzo.com/services/travel-products</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;

  // Add category pages
  for (const category of categories) {
    const categorySlug = category.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    sitemap += `
  <url>
    <loc>https://goflyzo.com/services/travel-products/${categorySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  // Add individual product pages
  for (const product of productsData.products) {
    const categorySlug = product.category.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    sitemap += `
  <url>
    <loc>https://goflyzo.com/services/travel-products/${categorySlug}/${product.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/products-sitemap.xml', sitemap);
  console.log('Products sitemap generated successfully!');
}

generateProductsSitemap();

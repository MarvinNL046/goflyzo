import fs from 'fs';
import path from 'path';

function generateBlogSitemap() {
  // Read the blog posts data
  const blogData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data', 'json', 'blog-posts.json'), 'utf-8')
  );

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Blog main page -->
  <url>
    <loc>https://goflyzo.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  // Add each blog post
  for (const post of blogData.posts) {
    sitemap += `
  <url>
    <loc>https://goflyzo.com/blog/${post.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>${post.date}</lastmod>
  </url>`;
  }

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/blog-sitemap.xml', sitemap);
  console.log('Blog sitemap generated successfully!');
}

generateBlogSitemap();

import { getAllPosts } from '@/lib/blog';
import { BlogPost } from '@/lib/blog';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export async function GET() {
  const baseUrl = 'https://goflyzo.com';

  // Static URLs
  const staticUrls: SitemapURL[] = [
    {
      loc: '/',
      priority: 1.0,
      changefreq: 'daily',
    },
    {
      loc: '/about',
      priority: 0.8,
      changefreq: 'monthly',
    },
    {
      loc: '/blog',
      priority: 0.9,
      changefreq: 'daily',
    },
  ];

  // Blog URLs
  const posts = await getAllPosts();
  const blogUrls: SitemapURL[] = posts.map((post: BlogPost) => ({
    loc: `/blog/${post.slug}`,
    priority: 0.7,
    changefreq: 'weekly',
  }));

  const urls = [...staticUrls, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${baseUrl}${url.loc}</loc>
          ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
          ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
          ${url.priority ? `<priority>${url.priority}</priority>` : ''}
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://goflyzo.com/sitemap.xml

# Rate limiting
Crawl-delay: 1

# Disallow patterns
Disallow: /api/
Disallow: /_next/
Disallow: /*?
Disallow: /*?*

# Allow patterns
Allow: /services/
Allow: /locations/
Allow: /contact/
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}

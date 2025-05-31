import { NextResponse } from 'next/server'

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ageless-blissful.com/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /dashboard/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /locations
Allow: /faq
Allow: /blog
Allow: /contact
Allow: /book

# Crawl delay
Crawl-delay: 1`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.env.VERCEL ? '/vercel/path0' : undefined
  }
}

export default nextConfig

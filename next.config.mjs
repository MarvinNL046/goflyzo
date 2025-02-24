/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'photo.hotellook.com',
      },
      {
        protocol: 'https',
        hostname: 'www.austrian.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lufthansa.com',
      },
      {
        protocol: 'https',
        hostname: 'www.klm.com',
      },
      {
        protocol: 'https',
        hostname: 'media.edreams.com',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    workerThreads: true,
    optimisticClientCache: true,
  },
  incrementalCacheHandlerPath: './lib/cache-handler.ts',
  staticPageGenerationTimeout: 180,
  output: 'standalone',
  distDir: '.next',
  generateEtags: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

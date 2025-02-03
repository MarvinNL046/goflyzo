/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [640, 768, 1024, 1200],
    imageSizes: [400, 600, 800],
    formats: ['image/webp'],
  },
  output: 'standalone',
  distDir: '.next',
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
}

export default nextConfig

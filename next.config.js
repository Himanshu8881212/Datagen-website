/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Cloudflare Pages
  trailingSlash: true, // Add trailing slashes for better compatibility
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during build for now
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during build for now
  },
  // Image optimization (configured for static export)
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['images.unsplash.com'], // Allow images from Unsplash
  },

  // Enable compression
  compress: true,

  // Optimize production builds
  experimental: {
    optimizeCss: true, // Optimize CSS
    optimizePackageImports: ['@/components'], // Optimize package imports
  },

  // Transpile dependencies if needed
  transpilePackages: [],

  // Configure webpack for optimizations
  webpack: (config, { dev, isServer }) => {
    // Only run in production builds
    if (!dev) {
      // Add any custom webpack optimizations here
    }

    return config;
  },
};

module.exports = nextConfig;

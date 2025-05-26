/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Cloudflare Pages
  trailingSlash: true, // Add trailing slashes for better compatibility

  // Security optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Disable server-side features that could be security risks in static export
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components', '@/lib'],
  },

  eslint: {
    ignoreDuringBuilds: true, // Skip linting during build for now
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during build for now
  },

  // Image optimization (configured for static export)
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['images.unsplash.com', 'datagen.in'], // Allow images from these domains
    formats: ['image/webp', 'image/avif'], // Modern image formats
    dangerouslyAllowSVG: false, // Disable SVG for security
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable compression
  compress: true,

  // Security-focused webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Security enhancements
    if (!dev) {
      // Remove source maps in production for security
      config.devtool = false;
    }

    // Remove server-only modules for static export
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    return config;
  },

  // Note: Headers and redirects are handled by Cloudflare for static export


};

module.exports = nextConfig;

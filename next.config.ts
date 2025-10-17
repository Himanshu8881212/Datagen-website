import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Static export for Cloudflare Pages
  output: 'export',

  // Disable powered by header for security
  poweredByHeader: false,

  // Image optimization disabled for static export
  images: {
    unoptimized: true,
  },

  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

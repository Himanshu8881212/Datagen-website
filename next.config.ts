import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Static export for Cloudflare Pages
  output: 'export',

  reactStrictMode: true,

  // Disable powered by header for security
  poweredByHeader: false,

  // Image optimization - disabled for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

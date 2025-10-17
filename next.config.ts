import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Removed static export to enable Vercel environment variables
  // Static export doesn't support runtime environment variables
  // output: 'export',

  // Disable powered by header for security
  poweredByHeader: false,

  // Image optimization
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

  // Environment variables are embedded at build time
  env: {
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  },
};

export default nextConfig;

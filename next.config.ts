import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Disable powered by header for security
  poweredByHeader: false,

  // Image optimization
  images: {
    unoptimized: false,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local dev: kaisyoku.local resolves to 127.0.0.1 which is blocked by Next.js SSRF protection
    // Set to false in production (Xserver has a public IP)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'kaisyoku.local',
        pathname: '/**',
        // Local dev only: kaisyoku.local resolves to 127.0.0.1
        // Remove this flag in production
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

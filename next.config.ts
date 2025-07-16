import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
  serverActions: {
    // configuració addicional aquí, si cal
  }
},
  reactStrictMode: true,
  // Si vols imatges remotes:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.yourcdn.com',
      },
    ],
  },
};

export default nextConfig;

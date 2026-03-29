import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about-us-2',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/design-studio',
        destination: '/studio',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

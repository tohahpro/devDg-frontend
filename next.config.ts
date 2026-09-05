import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["picsum.photos"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      }
    ]
  },
};

export default nextConfig;

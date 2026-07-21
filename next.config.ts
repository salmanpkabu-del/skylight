import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;


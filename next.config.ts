import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sc-technical-test-files.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

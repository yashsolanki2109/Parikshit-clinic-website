import type { NextConfig } from "next";

// Initialize OpenNext Cloudflare development environment
import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

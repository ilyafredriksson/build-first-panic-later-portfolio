import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  cacheComponents: true,
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.unsplash.com",
        port:"",
      },
      {
        protocol:"https",
        hostname:"picsum.photos",
        port:"",
      },
      {
        protocol:"https",
        hostname:"hardy-hamster-460.eu-west-1.convex.cloud",
        port:"",
      }
    ]
  },
};

export default nextConfig;

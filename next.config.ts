import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "test-messender.sgp1.cdn.digitaloceanspaces.com",
                port: "",
                pathname: "/**",
                search: "",
            },
        ],
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '100mb',
      },
    },
};

export default nextConfig;

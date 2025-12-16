import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack resolves modules from this project root (OneDrive path)
    root: __dirname,
  },
};

export default nextConfig;

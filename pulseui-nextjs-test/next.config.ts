import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['pulseui-base'],
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;

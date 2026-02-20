import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mypick-design-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

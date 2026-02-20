import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? '/mypick-design-portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  }
};

export default nextConfig;

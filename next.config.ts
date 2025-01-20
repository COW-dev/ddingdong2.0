import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, './src');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export { nextConfig };

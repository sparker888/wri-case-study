import withMarkdoc from '@markdoc/next.js';
import withSearch from './src/markdoc/search.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  // Add this line
  target: 'serverless',
};

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)
);
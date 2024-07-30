import withMarkdoc from '@markdoc/next.js';
import withSearch from './src/markdoc/search.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  metadataBase: new URL('https://gravital-wri-case-study.netlify.app/'),
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)
);
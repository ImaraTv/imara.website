const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Define a rewrites function for proxying requests
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any request starting with /api
        destination: 'https://teststudio.imara.tv/api/:path*', // Proxy to the external API
      },
    ];
  },

  // Add any other Next.js config below
  images: {
    domains: ['imara.tv', 'teststudio.imara.tv', 'dashboard.imara.tv', 'studio.imara.tv'],
  },
};

module.exports = withMDX(nextConfig);


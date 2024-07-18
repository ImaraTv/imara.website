const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    images: {
        domains: ['imara.tv'],
    },
    async rewrites() {
        return [
            {
                source: '/api/videos',
                destination: 'https://imara.tv/admin/api/videos',
            },
        ]
    },
}

module.exports = withMDX(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for development mode
  // trailingSlash: true, // Remove for development
  images: {
    unoptimized: true
  },
  // Removed invalid experimental option
  // Allow all hosts for Replit environment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

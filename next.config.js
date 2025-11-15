/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: false, // Netlify will optimize images
  },
  // Output configuration for Netlify
  // Note: Netlify Next.js plugin handles output automatically
  // Ensure proper static file handling
  trailingSlash: false,
}

module.exports = nextConfig


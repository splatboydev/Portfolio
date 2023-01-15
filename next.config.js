/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: false,
  },
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig

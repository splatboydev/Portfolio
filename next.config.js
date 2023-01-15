/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig

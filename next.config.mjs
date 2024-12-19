/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Use this for debugging
  },
}

export default nextConfig

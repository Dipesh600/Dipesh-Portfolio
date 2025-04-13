/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  poweredByHeader: false,
}

export default nextConfig; 
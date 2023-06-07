/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: "/dev",
  images: {
    unoptimized: true,
  },
  output: "standalone",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  output: 'export'
};

module.exports = nextConfig;

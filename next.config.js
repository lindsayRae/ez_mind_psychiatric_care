//import dotenv from 'dotenv';

//dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  images: {
    //domains: [process.env.STRAPI_ASSETS_BASE_URL],
    unoptimized: true
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/banana',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

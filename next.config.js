/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img3.idealista'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img3.idealista.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

module.exports = nextConfig;

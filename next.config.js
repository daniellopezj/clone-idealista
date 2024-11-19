/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img3.idealista','img4.idealista', ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img3.idealista.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img4.idealista.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

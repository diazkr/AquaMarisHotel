/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['stanzahotel.mx', 'i.pinimg.com', 'www.viacelere.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['stanzahotel.mx', 'i.pinimg.com', 'www.viacelere.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dvog7iykc/image/upload/**',
      },
    ],
  },
};


export default nextConfig;

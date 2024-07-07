/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'stanzahotel.mx', 
      'i.pinimg.com', 
      'www.viacelere.com', 
      'res.cloudinary.com', 
      'lh3.googleusercontent.com' // Agrega el nuevo dominio aquí
    ],
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
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', 
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;

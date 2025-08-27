/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Configuración para producción
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://mvasrl.com' : '',
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? 'https://mvasrl.com' : '',
  },
  // Configuración adicional para desarrollo
  async rewrites() {
    return process.env.NODE_ENV === 'development' ? [
      // Solo aplicar rewrites en desarrollo para proxy al backend local
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Proxy al backend local
      },
    ] : [];
  },
};

module.exports = nextConfig;

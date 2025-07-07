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
};

module.exports = nextConfig;

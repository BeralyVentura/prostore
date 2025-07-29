/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint en producción
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TS en producción
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;

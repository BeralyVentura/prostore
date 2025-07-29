/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignorar errores de ESLint durante el build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignorar errores de TypeScript durante el build
  }
};

module.exports = nextConfig;
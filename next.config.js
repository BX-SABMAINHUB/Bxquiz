/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Necesario para GitHub Pages y export estático
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Evita errores comunes en Vercel/GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  basePath: ''
};

module.exports = nextConfig;

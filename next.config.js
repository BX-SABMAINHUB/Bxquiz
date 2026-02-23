/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Esto genera archivos estáticos
  images: {
    unoptimized: true  // Necesario para export
  },
  trailingSlash: true,  // Soluciona problemas de rutas en GitHub Pages
};

module.exports = nextConfig;

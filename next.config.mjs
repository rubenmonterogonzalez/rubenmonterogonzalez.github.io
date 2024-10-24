/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.devtool = 'source-map'; // Puedes cambiar el tipo de mapa aquí
    return config;
  }
};

export default nextConfig;

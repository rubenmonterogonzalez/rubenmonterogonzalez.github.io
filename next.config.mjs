/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Enables static export mode
  distDir: 'export',
  trailingSlash: true, // Adds trailing slash to all routes
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: '', // Optional: Adjust if you're using a subpath in your repository
  assetPrefix: './', // Use relative paths for assets
};

export default nextConfig;

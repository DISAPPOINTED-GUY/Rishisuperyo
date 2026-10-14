/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you don't have trailingSlash set, adding it prevents 404s on refresh:
  trailingSlash: true,
};

export default nextConfig;

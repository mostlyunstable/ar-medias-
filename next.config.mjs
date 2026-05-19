/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern AVIF/WebP formats — major payload reduction
    formats: ['image/avif', 'image/webp'],
    // Optimized device breakpoints — avoids serving oversized images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Compress responses
  compress: true,
  // Remove X-Powered-By header
  poweredByHeader: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'armedias.com'],
    },
  },
};

export default nextConfig;

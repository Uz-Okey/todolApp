/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore ESLint errors in Vercel build
  },
};

module.exports = nextConfig;

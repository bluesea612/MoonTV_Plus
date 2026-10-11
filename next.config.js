/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STORAGE_TYPE: 'UPSTASH',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

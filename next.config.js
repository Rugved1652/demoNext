/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo3.madrasthemes.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

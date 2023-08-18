/** @type {import('next').NextConfig} */
const nextConfig = {
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

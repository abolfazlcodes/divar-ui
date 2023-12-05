/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s100.divarcdn.com",
      },
    ],
    // domains: ["s100.divarcdn.com"],
  },
};

module.exports = nextConfig;

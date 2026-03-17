/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        // Legacy WordPress images still in use
        protocol: "https",
        hostname: "attesi.mx",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

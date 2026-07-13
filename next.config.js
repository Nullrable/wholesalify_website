const withNextIntl = require("next-intl/plugin")("./src/lib/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.wholesalify.com",
          },
        ],
        destination: "https://wholesalify.com/:path*",
        permanent: true,
      },
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
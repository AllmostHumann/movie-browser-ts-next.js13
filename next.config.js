/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies-browser/movies",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

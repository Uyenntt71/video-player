/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/vod',
        permanent: false,
      },
      {
        source: '/',
        destination: '/vod',
        permanent: false,
      },
    ];
  },
};

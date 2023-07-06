/** @type {import('next').NextConfig} */
const nextConfig = {}
// {
//   reactStrictMode: true,
//   images: {
//       domains: ['127.0.0.1'],
//   },
// };

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: 'randomuser.me/api/portraits/med/**s',
      },
    ],
  },
}
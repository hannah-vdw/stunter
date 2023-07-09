const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "randomuser.me/api/portraits/med/**s",
      },
    ],
  },
  // webpack: (config) => {
  //     const reactPaths = {
  //         react: path.join(__dirname, "node_modules/react"),
  //         "react-dom": path.join(__dirname, "node_modules/react-dom"),
  //     };
  //     config.resolve = {
  //         ...config.resolve,
  //         alias: {
  //             ...config.resolve.alias,
  //             ...reactPaths,
  //         },
  //     };
  //     return config;
  // },
};

module.exports = nextConfig;

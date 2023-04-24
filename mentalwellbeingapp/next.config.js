/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


// 👇️ assumes you use Webpack 5
// module.exports = {
//   webpack5: true,
//   webpack: config => {
//     config.resolve.fallback = {
//       tls: false,
//       net: false,
//       fs: false
//     };

//     return config;
//   },
// };


/** @type {import('next').NextConfig} */
 const withTM = require("next-transpile-modules")(["@tamura/amplify-common-lib"], {
   resolveSymlinks: false,
 })

const nextConfig = withTM({
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
})
  //   webpack: (config, { buildId, dev, isServer }) => {
  //     config.snapshot = Object.assign(config.snapshot || {}, {
  //       managedPaths: [
  //         /^(.+?[\\/]node_modules)[\\/]((?!amplify-common-lib)).*[\\/]*/,
  //       ],
  //     })
  //     config.resolve.symlinks = false
  //     // config.watchOptions = {
  //     //     poll: 800,
  //     //   aggregateTimeout: 5,
  //     //   ignored: ["**/.git/**", "**/.next/**", "**/node_modules/**"],
  //     // }

  //     return config
  //   },
// module.exports = withTM({
//   reactStrictMode: true,

//   webpack: (config, { buildId, dev }) => {
//     config.watchOptions = {
//       poll: 800,
//       aggregateTimeout: 300,
//       ignored: ["**/node_modules/**"],
//     }
//     return config
//   },
// })
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     externalDir: true,
//   },
//   webpack: (config, { buildId, dev }) => {
//     config.resolve.symlinks = false

//     // config.watchOptions = {
//     //   poll: 800,
//     //   aggregateTimeout: 300,
//     // }

//     console.log(config.watchOptions)

//     config.watchOptions.ignored = [
//       ...config.watchOptions.ignored.filter(
//         (pattern) => pattern !== "**/node_modules/**"
//       ),
//       `**node_modules/amplify-common-lib/**/*`,
//     ]

//     return config
//   },
// }

module.exports = nextConfig

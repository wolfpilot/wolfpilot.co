// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  images: {
    deviceSizes: [320, 375, 425, 768, 1024, 1440, 1920],
  },
}

const withMDX = require("@next/mdx")()

module.exports = withMDX(nextConfig)

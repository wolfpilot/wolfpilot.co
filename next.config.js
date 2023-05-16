// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
}

const withMDX = require("@next/mdx")()

module.exports = withMDX(nextConfig)

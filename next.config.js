// next.config.js
/** @type {import('next').NextConfig} */

const linariaConfig = require("./next-linaria.config")

const nextConfig = {
  ...linariaConfig,
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require("@next/mdx")()

module.exports = withMDX(nextConfig)

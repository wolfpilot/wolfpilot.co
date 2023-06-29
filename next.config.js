// next.config.js
/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 425, 768, 1024, 1440, 1920, 2560, 3840],
    minimumCacheTTL: 31536000,
  },
}

module.exports = config

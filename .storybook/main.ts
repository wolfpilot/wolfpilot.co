import type { StorybookConfig } from "@storybook/nextjs"

const nextConfig = require("../next-linaria.config")

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (baseConfig) => nextConfig.webpack(baseConfig, {}),
}

export default config

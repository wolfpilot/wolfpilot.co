import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-config-prettier/flat"
import storybook from "eslint-plugin-storybook"
import testingLibrary from "eslint-plugin-testing-library"

export default defineConfig([
  ...nextVitals,
  ...storybook.configs["flat/recommended"],
  {
    // Preserve the rules enforced by the previous Next.js ESLint configuration.
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["**/*.{spec,test}.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
    ...testingLibrary.configs["flat/react"],
  },
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "storybook-static/**",
    "next-env.d.ts",
  ]),
])

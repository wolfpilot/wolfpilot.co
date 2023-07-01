/** @type {import('next-sitemap').IConfig} */

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV

/**
 * For dynamic preview URLs use Vercel's own env vars,
 * otherwise default to the ones defined locally.
 */
const SITE_URL =
  ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL

// Optimise crawling by not fetching SSG meta files
const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
]

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
}

module.exports = config

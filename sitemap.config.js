/** @type {import('next-sitemap').IConfig} */

console.log(
  "process.env.NEXT_PUBLIC_SITE_URL",
  process.env.NEXT_PUBLIC_SITE_URL
)

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

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

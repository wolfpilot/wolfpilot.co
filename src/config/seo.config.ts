import { NextSeoProps } from "next-seo"

// Setup
const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV

/**
 * For dynamic preview URLs use Vercel's own env vars,
 * otherwise default to the ones defined locally.
 */
const SITE_URL =
  ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL

const DEFAULT_META_TITLE = "Wolf Pilot"
const DEFAULT_META_DESCRIPTION =
  "Creative Full-Stack Developer, Concept Artist & Illustrator"

export const defaultMeta: NextSeoProps = {
  title: DEFAULT_META_TITLE,
  titleTemplate: "%s | Razvan Negrea",
  description: DEFAULT_META_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    site_name: "Razvan Negrea",
    title: `${DEFAULT_META_TITLE} | Razvan Negrea`,
    description: DEFAULT_META_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        alt: "Collage of various works by Razvan Negrea",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@Razvan__Negrea",
    site: "@Razvan__Negrea",
    cardType: "summary_large_image",
  },
}

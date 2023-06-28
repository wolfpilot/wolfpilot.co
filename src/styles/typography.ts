import localFont from "next/font/local"

export const BASE_FONT_SIZE = 16

export const weights = {
  light: 300,
  normal: 400,
  bold: 700,
}

/**
 * Imported in app to fix FOUT issues
 *
 * For more info, see:
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
 */
export const fontPrimary = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../../public/fonts/chillax-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/chillax-regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  fallback: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  variable: "--font-primary",
})

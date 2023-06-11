// Assets
import HeroImage from "/public/images/cases/wolf-pilot/hero.jpg"

// Types
import { Meta, Summary, PageData } from "./"

export const meta: Meta = {
  title: "Wolf Pilot",
  tagline: "Behind the scenes",
  category: "personal",
  date: new Date("April 2017"),
  technologies: "Jekyll, SASS, JS, Illustrator, PhotoShop",
  tags: ["web development", "web design"],
  image: {
    src: HeroImage,
    alt: "Fasten your seatbelt sign",
  },
}

const summary: Summary = {
  heading:
    "Gentle on the outside, a beast on the inside - my most accomplished work so far.",
  text: `Wolf Pilot is my portfolio site. It's also an identity. It's the culmination of many struggles, and an expression of my artistic self. It's modular, but light. It's minimal, but doesn't compromise any essential features. And most of all, it has been an adventure in itself.`,
}

export const pageData: PageData = {
  meta,
  summary,
}

// Assets
import HeroImage from "/public/images/cases/wolf-pilot/hero.jpg"

// Types
import { Meta, PageData } from "./"

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

export const pageData: PageData = {
  meta,
}

// Assets
import HeroImage from "/public/images/cases/cawr/hero.jpg"

// Types
import { Meta, PageData } from "./"

export const meta: Meta = {
  title: "CAWR",
  tagline: "Centre for Agroecology, Water and Resilience",
  category: "commercial",
  date: new Date("April 2015"),
  technologies: "Photoshop, good ol' pen & paper",
  tags: ["web design"],
  image: {
    src: HeroImage,
    alt: "Top-down view of a terraced field used in farming",
  },
}

export const pageData: PageData = {
  meta,
}

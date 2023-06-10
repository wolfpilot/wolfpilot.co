// Assets
import HeroImage from "/public/images/cases/retrocade/hero.jpg"

// Types
import { Meta, PageData } from "./"

export const meta: Meta = {
  title: "RetroCade",
  tagline:
    "An adventure through the magical world of CSS design & keyframe animations",
  category: "personal",
  date: new Date("June 2016"),
  technologies: "SASS, jQuery",
  tags: ["web development", "web design"],
  image: {
    src: HeroImage,
    alt: "Black and white abstract pattern",
  },
}

export const pageData: PageData = {
  meta,
}

// Assets
import HeroImage from "/public/images/cases/retrocade/hero.jpg"

// Types
import { Meta, Summary, PageData } from "./"

export const meta: Meta = {
  title: "RetroCade",
  tagline: "Boogie like it's the '80s",
  category: "personal",
  date: new Date("June 2016"),
  technologies: "SASS, jQuery",
  tags: ["web development", "web design"],
  image: {
    src: HeroImage,
    alt: "Black and white abstract pattern",
  },
}

const summary: Summary = {
  heading:
    "An adventure through the magical world of CSS design & keyframe animations",
  text: `Retrocade is an ambitious ever-growing experiment set out to create a functional, semi-realistic audio system in HTML, CSS and JavaScript only.`,
}

export const pageData: PageData = {
  meta,
  summary,
}

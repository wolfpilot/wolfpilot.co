// Assets
import HeroImage from "/public/images/cases/retrocade/hero.jpg"
import StatementFeaturedImage from "/public/images/cases/retrocade/statement-featured.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

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

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Close-up of an 80's cassette tape recorder",
  },
  heading: "The future is watching",
  copy: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.`,
}

export const content: Content = []

export const pageData: PageData = {
  meta,
  summary,
  statement,
  content,
}

// Assets
import HeroImage from "/public/images/cases/wolf-pilot/hero.jpg"
import StatementFeaturedImage from "/public/images/cases/wolf-pilot/statement-featured.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

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

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Side-shot of a biplane on the ground",
  },
  heading: "Humble Beginnings",
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

// Assets
import HeroImage from "/public/images/cases/cawr/hero.jpg"
import StatementFeaturedImage from "/public/images/cases/cawr/statement-featured.jpg"

// Types
import { Meta, Summary, Statement, PageData } from "./"

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

const summary: Summary = {
  heading: "Clear, user-friendly and informative",
  text: `Part of Coventry University, the Centre for Agroecology, Water and Resilience conducts research aimed at developing more resilient food and water systems throughout the world.
    
    In order to counteract climate and environmental change, loss of biodiversity, natural and man-made disasters and other destabilising factors, CAWR is continually seeking to expand its international team of researchers, becoming the largest centre in the world to do trans-disciplinary research on the links between agroecology and sustainable food systems, water management, and community and socio-ecological resilience.
    
    I was approached by the Executive Director, Dr. Michel Pimbert, to design CAWR's Communication and Publications web platform, emphasising in particular their internal working paper series, videos and animations, book series and other multimedia publications.`,
}

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Person holding organic soil in their hands",
  },
  heading: "Some random facts about this project",
  copy: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.`,
}

export const pageData: PageData = {
  meta,
  summary,
  statement,
}

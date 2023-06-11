// Assets
import HeroImage from "/public/images/cases/cawr/hero.jpg"

// Types
import { Meta, Summary, PageData } from "./"

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

export const pageData: PageData = {
  meta,
  summary,
}

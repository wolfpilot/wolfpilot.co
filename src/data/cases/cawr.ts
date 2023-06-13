// Assets
import HeroImage from "/public/images/cases/cawr/hero.jpg"
import StatementFeaturedImage from "/public/images/cases/cawr/statement-featured.jpg"
import ContentImage1 from "/public/images/cases/cawr/content-image-1.jpg"
import ContentImage2 from "/public/images/cases/cawr/content-image-2.jpg"
import ContentImage3 from "/public/images/cases/cawr/content-image-3.jpg"
import ContentImage4 from "/public/images/cases/cawr/content-image-4.jpg"
import ContentImage5 from "/public/images/cases/cawr/content-image-5.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

export const meta: Meta = {
  id: "cawr",
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

const content: Content = [
  {
    type: "image",
    data: {
      src: ContentImage1,
      alt: "Final design image",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Planning and research",
      subheading: "Taking one step at a time",
      copy: `It would be a lie to say that I wasn't the least bit nervous - CAWR was set to become the largest, most important project I had ever worked on. Most of my fears, however, dissipated upon meeting Michel for the second time so that we could discuss the project a bit more in depth.
      
      From the little amount of information I was given, I managed to gather a number of stylistic references, as well as prepare a list of tens and tens of points that we needed to touch on: what is the purpose of the site, is there an existing website I could take a look at, are there any brand guidelines or specific features that I would need to integrate, etc.
      
      By the end of the project, we found the whole concept to have grown considerably: where before stood only a few rough ideas revolving around multimedia publications, now the website featured a book carousel showcasing CAWR's latest publications, a working papers browser with its own advanced search functionality, a fully customised video player and last, but not least, a geolocated interactive gallery used by researchers around the world to upload photographs taken at various hotspots and share them on the front-page.`,
    },
  },
  {
    type: "figure",
    data: {
      src: ContentImage2,
      alt: "Mockup image #1",
      caption: "Mockups and early concepts #1",
    },
  },
  {
    type: "figure",
    data: {
      src: ContentImage3,
      alt: "Mockup image #2",
      caption: "Mockups and early concepts #2",
    },
  },
  {
    type: "figure",
    data: {
      src: ContentImage4,
      alt: "Mockup image #3",
      caption: "Mockups and early concepts #3",
    },
  },
  {
    type: "figure",
    data: {
      src: ContentImage5,
      alt: "Mockup image #4",
      caption: "Mockups and early concepts #4",
    },
  },
]

export const pageData: PageData = {
  meta,
  summary,
  statement,
  content,
}

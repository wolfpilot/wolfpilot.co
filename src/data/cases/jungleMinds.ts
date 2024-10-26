// Assets
import HeroImage from "/public/media/cases/jungle-minds/hero.jpg"
import StatementFeaturedImage from "/public/media/cases/jungle-minds/statement.webp"
import Image1 from "/public/media/cases/jungle-minds/image-1.jpg"
import Image2 from "/public/media/cases/jungle-minds/image-2.jpg"

import Video1PlaceholderImage from "/public/media/cases/jungle-minds/video-1-placeholder.jpg"
import Video2PlaceholderImage from "/public/media/cases/jungle-minds/video-2-placeholder.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

// Assets
const video1Src = `/media/cases/jungle-minds/video-1`
const video2Src = `/media/cases/jungle-minds/video-2`

export const meta: Meta = {
  id: "jungle-minds",
  title: "Jungle Minds",
  description: "Rebuild of Jungle Minds website.",
  tagline: "Welcome to the Jungle!",
  category: "commercial",
  date: new Date("2019/12/01"),
  technologies: "Gatsby, Formik, Lottie",
  tags: ["web development"],
  image: {
    src: HeroImage,
    alt: "Jungle Minds' logo displayed on a square grid",
  },
}

const summary: Summary = {
  heading: "An ambitiously bold rebranding process",
  html: `<p>In 2019, <a href="https://www.jungleminds.com" target="_blank" rel="noopener noreferrer">Jungle Minds</a> planned a complete rebrand toward a modern, typography-oriented design that would leverage colours and contrast to make a bold first impression. This change extended to their social profiles, advertising videos and even redecorating the office to match the new geometrical wizardry.
      
    I was fortunate to be the one to spearhead the project together with the UI/UX team.
    
    Aside from building the website, I proposed, prototyped and implemented many of the animations that have been kept alive and well even years later, some of which I will showcase below.</p>`,
}

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Toggle animation of the menu button.",
  },
  heading: "It's all in the details",
  copy: `What really makes one app stand out from another? Is it the layout? The colour palette? The copy? Is it perhaps the little toast popup gently letting you know there's an error in the form you submitted? Maybe it's the little UFO stealing the "0" on the 404 page.
  
  Truth is, it's all of these. The key, however, is striking the correct balance and consistency.
  
  Overdo it and it becomes tiring. Randomly add one effect here and there and they may look disjointed. It's the subtle use of visual clues that makes a wonderful experience.`,
}

const content: Content = [
  {
    type: "image",
    data: {
      src: Image1,
      alt: "Snapshot of the Jungle Minds website homepage",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Motion",
      subheading: "Page transitions",
      html: `<p>Anyone who knows me knows how much I love animation and anyone who's coded any kind of page transitions will tell you how difficult it is to get anything other than a simple fade in - fade out right.
      
      For our website, I wanted to come up with something special. As plenty of the new branding revolved around geometrical shapes, I set out to create a grid that could host any number of shapes, letters, images, anything that JS Canvas could handle which would become the crossover effect between pages.

      In my head, two requirements had to be met:

      1. It should be extensible to more than just black and white squares.
      2. It should automatically blend into the next page's background.
      3. It should run at 60fps.

      And so, as any nerd would do, I started writing a particle generator engine.
      
      Put simply, the page is divided into a fixed number of horizontal cells, whereas vertically it is auto-filled to the bottom of the screen. Each particle has characteristics such as <code>shape</code>, <code>fade in/out</code>, <code>duration</code>, <code>fill</code>, <code>stroke</code> and last, but not least, a lifespan. At the end of each particle's life, they are deleted from the array to free up precious memory.
      
      Same as with any games engine, the Canvas is painted, cleared and painted again in a tick loop. The swipe effect runs through some Bezier curve easings to give it a more natural feeling. Finally, the entire canvas is scaled to the user's DPI settings as to maintain the correct proportions regardless of the screen size.
      </p>`,
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video1Src,
        label: "Example of transitions between pages.",
      },
      placeholder: {
        src: Video1PlaceholderImage,
        alt: "First frame of the video",
      },
    },
  },
  {
    type: "textBlock",
    data: {
      subheading: "Content",
      html: `<p>All content is lazy-loaded shortly before getting into view.

      For the most part, this is done through what I like to call the "blinders" effect, where text and media slide in from what looks like invisible blocks. It's a neat little trick that can be achieved by setting the parent container to <code>overflow: hidden;</code> and pushing the block in via <code>translateY</code>.
      
      Again, the key here is consistency in both usage of said animation, but also the timings and easings.</p>`,
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video2Src,
        label: "Example of lazy loading content.",
      },
      placeholder: {
        src: Video2PlaceholderImage,
        alt: "First frame of the video",
      },
    },
  },
  {
    type: "figure",
    data: {
      src: Image2,
      alt: "Contact page design",
      caption: "Contact page layout and form",
    },
  },
]

export const pageData: PageData = {
  meta,
  summary,
  statement,
  content,
}

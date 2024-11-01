// Assets
import HeroImage from "/public/media/cases/retrocade/hero.jpg"
import StatementFeaturedImage from "/public/media/cases/retrocade/statement.jpg"
import Image1 from "/public/media/cases/retrocade/image-1.jpg"
import Image2 from "/public/media/cases/retrocade/image-2.jpg"
import Video1PlaceholderImage from "/public/media/cases/retrocade/video-1-placeholder.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

// Assets
const video1Src = `/media/cases/retrocade/video-1`

export const meta: Meta = {
  id: "retrocade",
  title: "RetroCade",
  description:
    "Personal project replicating an 80's reel-to-reel tape recorder exclusively in code",
  tagline: "Boogie like it's the '80s",
  category: "personal",
  date: new Date("2016/06/14"),
  technologies: "SASS, jQuery",
  tags: ["web development", "web design"],
  image: {
    src: HeroImage,
    alt: "Black and white abstract pattern",
    credits: {
      label: "Photo by Robert Haverly",
      url: "https://unsplash.com/photos/VDFOnAwdVjg",
    },
  },
}

const summary: Summary = {
  heading:
    "An adventure through the magical world of CSS design & keyframe animations",
  html: `<p>Retrocade is an ambitious experiment set out to create a functional, semi-realistic audio system in HTML, CSS and JavaScript only.
  
  Demo on <a href="https://codepen.io/wolfpilot/pen/EyKzqW" target="_blank" rel="noopener noreferrer">Codepen</a>.
  </p>`,
}

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Close-up of an 80's cassette tape recorder",
    credits: {
      label: "@Xingye Jiang",
      url: "https://unsplash.com/photos/RZwbk4Kc2xg",
    },
  },
  heading: "Pushing the limits",
  copy: `As much as CSS can be obtuse at times and we like to joke about it, it can also be leveraged to accomplish absolutely stunning visuals. Take a look on Codepen. Every day a couple of small, nifty projects come up that blow everyone's minds.
  
  Paintings in CSS? Done. 3D in 2D? Done. Entire forms without a shred of Javascript? That's also a thing. The possibilities are truly endless.
  
  Why not, then, replicate a more or less functional R2R recorder using (mostly) CSS?`,
}

export const content: Content = [
  {
    type: "textBlock",
    data: {
      heading: "Sweet dreams",
      subheading: "(are made of this)",
      html: `<p>And indeed they are.
      
      I based my concept on the <a href="http://www.thevintageknob.org/akai-GX-747.html" target="_blank" rel="noopener noreferrer">Akai GX-747</a> and on the memories of my father's <a href="http://www.thevintageknob.org/grundig-TS1000.html" target="_blank" rel="noopener noreferrer">Grundig TS1000</a>. I felt that this mixture of old and new made a perfectly pleasant and balanced layout. Influenced by Google's currently trending material design, the concept went through quite a few iterations and many moments of self-doubt. Am I adding too many buttons? Is it supposed to be three-head or four-head? Should it even have a stop button or just pause? You get the gist of it.</p>`,
    },
  },
  {
    type: "image",
    data: {
      src: Image1,
      alt: "'80s-style logo reading 'Retrocade'",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Get down on it",
      subheading: "Get down on it!",
      html: `<p>So, what do I plan on adding in the future, you ask?</p>
      
      <ul>
        <li><strike>Functional power button</strike></li>
        <li><strike>Functional play/pause buttons</strike></li>
        <li>Draggable volume sliders</li>
        <li>Rotating knobs</li>
        <li>Animated VU meters</li>
        <li>Easing rewind/fast-forward functions</li>
        <li><strike>Display counter that actually keeps track of time</strike></li>
      </ul>
      
      <p>Perhaps even the possibility of playing a real track.</p>`,
    },
  },
  {
    type: "figure",
    data: {
      src: Image2,
      alt: "Lower part of a reel-to-reel tape recorder generated in CSS only",
      caption: "Close-up details",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "See it in action",
      subheading: "Buttons, dials, sliders",
      html: `<p>Reel-to-reel tape recorders can often times appear confusing due to their highly complicated layouts. I tried to approach this issue by heavily simplifying the original concept, whilst still providing a somewhat functional, minimalist UI.</p>`,
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video1Src,
        label:
          "Demo of various interactions with the digital reel-to-reel tape recorder.",
      },
      placeholder: {
        src: Video1PlaceholderImage,
        alt: "First frame of the video",
      },
    },
  },
]

export const pageData: PageData = {
  meta,
  summary,
  statement,
  content,
}

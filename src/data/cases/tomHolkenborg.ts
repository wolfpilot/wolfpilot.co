// Assets
import HeroImage from "/public/media/cases/tom-holkenborg/hero.jpg"
import StatementFeaturedImage from "/public/media/cases/tom-holkenborg/statement.jpg"

import Image1 from "/public/media/cases/tom-holkenborg/storyboard.jpg"

import Video1PlaceholderImage from "/public/media/cases/tom-holkenborg/video-1-placeholder.jpg"
import Video2PlaceholderImage from "/public/media/cases/tom-holkenborg/video-2-placeholder.jpg"
import Video3PlaceholderImage from "/public/media/cases/tom-holkenborg/video-3-placeholder.jpg"
import Video4PlaceholderImage from "/public/media/cases/tom-holkenborg/video-4-placeholder.jpg"
import Video5PlaceholderImage from "/public/media/cases/tom-holkenborg/video-5-placeholder.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

// Assets
const video1Src = `/media/cases/tom-holkenborg/video-1`
const video2Src = `/media/cases/tom-holkenborg/video-2`
const video3Src = `/media/cases/tom-holkenborg/video-3`
const video4Src = `/media/cases/tom-holkenborg/video-4`
const video5Src = `/media/cases/tom-holkenborg/video-5`

export const meta: Meta = {
  id: "tom-holkenborg",
  title: "Tom Holkenborg",
  description:
    "Rebranding and new website for Grammy nominated producer, musician and composer Tom Holkenborg.",
  tagline: "An entire persona reimagined.",
  category: "commercial",
  date: new Date("2021/02/20"),
  technologies: "Next.js, Prismic, Apollo, Auth0, Nodemailer",
  tags: ["web development"],
  image: {
    src: HeroImage,
    alt: "Tom Holkenberg sitting beside a large wall of audio electronic equipment.",
  },
}

const summary: Summary = {
  heading: "Composer, initiator, educator",
  html: `<p><a href="https://www.imdb.com/name/nm0432725/" target="_blank" rel="noopener noreferrer">Tom Holkenborg</a>, known by his stage name as <em>Junkie XL</em>, is a Grammy-nominated, multi-platinum producer, musician, and composer. Drawing from his extensive background in electronic music and a passion for innovation, he's committed to transforming the landscape of film scoring.

    Given his diverse career, Tom needed to connect effectively with various audiences, including composers, producers, talents, and fans, using the appropriate tone and branding. The idea was to create an ecosystem that delivers a unified experience, enabling each audience to find the right pathway into Tom’s world through his distinct labels.
    
    Check it out on <a href="https://tomholkenborg.com/" target="_blank" rel="noopener noreferrer">tomholkenborg.com</a>.</p>`,
}

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Toggle animation of the menu button.",
  },
  heading: "Hands-on",
  copy: `I would be lying if I said that I knew who Tom Holkenborg was prior to this project, so imagine my surprise when I found out he was the one behind film scores such as Zack Snyder's Justice League, Batman v Superman and Deadpool.
  
  Shaking aside all nerves, I was glad to finally get the chance to work with a subject I hold dear to my heart, and that is audio.

  Among other audio-visual features I worked on, you can find players for Tom's musical scores, Spotify integrations, and even a fun little synth-keyboard on the 404 page, should you be so (un)lucky.`,
}

const content: Content = [
  {
    type: "video",
    data: {
      video: {
        src: video1Src,
        label: "Demo of the Tom Holkenborg homepage.",
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
      heading: "A 4-in-1 Special",
      subheading: "Page in a page in a page...",
      html: `<p>As anyone who's watched Inception knows, you can only dive so deep before going mad.
      
      Tom's new website is as an umbrella where each section is its own sub-brand, which resulted in some very clever routing and theming (not to mention headaches).</p>
      
      <ul>
        <li>Blue. The current persona, or the Holywood film composer.</li>
        <li>Black. The DJ of the past, early career and discography.</li>
        <li>Red. The altruist, providing free lessons and insights to any willing to learn.</li>
        <li>White. The teacher, training new generations of aspiring musicians.</li>
      </ul>`,
    },
  },
  {
    type: "image",
    data: {
      src: Image1,
      alt: "Snapshot of the Tom Holkenborg Products page.",
      fullWidth: true,
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Visuals",
      subheading: "Animations, theming and filters galore! ",
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video2Src,
        label:
          "Example of transitioning between different themes and sections.",
      },
      placeholder: {
        src: Video2PlaceholderImage,
        alt: "First frame of the video",
      },
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video3Src,
        label: "Demo of various filters being applied to videos.",
      },
      placeholder: {
        src: Video3PlaceholderImage,
        alt: "First frame of the video",
      },
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Warning: audio ahead!",
      subheading: "Please make sure you adjust your volume.",
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video4Src,
        label: "Demo of custom audio player.",
      },
      placeholder: {
        src: Video4PlaceholderImage,
        alt: "First frame of the video",
      },
      muted: false,
    },
  },
  {
    type: "video",
    data: {
      video: {
        src: video5Src,
        label: "Demo of synth-keyboard being played on the 404 page.",
      },
      placeholder: {
        src: Video5PlaceholderImage,
        alt: "First frame of the video",
      },
      muted: false,
    },
  },
]

export const pageData: PageData = {
  meta,
  summary,
  statement,
  content,
}

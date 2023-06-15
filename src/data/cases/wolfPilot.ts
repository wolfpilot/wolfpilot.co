// Assets
import HeroImage from "/public/media/cases/wolf-pilot/hero.jpg"
import StatementFeaturedImage from "/public/media/cases/wolf-pilot/statement-featured.jpg"
import Image1 from "/public/media/cases/wolf-pilot/image-1.jpg"
import Image2 from "/public/media/cases/wolf-pilot/image-2.jpg"
import Image3 from "/public/media/cases/wolf-pilot/image-3.jpg"

// Types
import { Meta, Summary, Statement, Content, PageData } from "./"

export const meta: Meta = {
  id: "wolf-pilot",
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
  html: `<p>Wolf Pilot is my portfolio site. It's also an identity. It's the culmination of many struggles, and an expression of my artistic self. It's modular, but light. It's minimal, but doesn't compromise any essential features. And most of all, it has been an adventure in itself.</p>`,
}

const statement: Statement = {
  featuredImg: {
    src: StatementFeaturedImage,
    alt: "Side-shot of a biplane on the ground",
  },
  heading: "Humble Beginnings",
  copy: `				My plan was simple: what do I need? I need a site that I can display my work on. The bare necessities are made up of a short section about myself, a gallery of sorts and a contact area. Easy enough, right? Right.

  I decided a one page design would best suit my needs.`,
}

export const content: Content = [
  {
    type: "image",
    data: {
      src: Image1,
      alt: "Initial design mock-up",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Planning",
      subheading: "Back to the basics",
      html: `<p>
      I built my previous site in WordPress. It was a no-frills, hack-your-way-at-WordPress' 20xx theme using shortcodes, styling pages by their IDs and generally a pain to maintain, especially when I would only update it every once in a blue moon. In the meantime, I learnt my way around the wonderful <a href="https://www.advancedcustomfields.com/" target="_blank" rel="noopener noreferrer">ACF</a> and realised that there's a whole world of possibilities out there. Needless to say, I struggled to find a reason for which I would opt for such a heavy CMS, or a CMS at all, when my requirements weren't so high to begin with. I decided to look into lighter alternatives.

      Eventually, I bumped into flat file site generators and the idea really struck a note with me. This would become a static, bare-bones site, built from scratch just like in the good ol' days. The only exception would be Jekyll, which would provide some basic DB-like functionality through the use of plain text files.

      I was scared, but most of all I was scared of dropping jQuery, the cozy, oh-so-familiar liar that keeps telling us, 'Ah, don't worry, <b>it's still JavaScript!</b>'.
    </p>`,
    },
  },
  {
    type: "image",
    data: {
      src: Image2,
      alt: "Photo of street signs reading 'ONE WAY'",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Danger!",
      subheading: "Here be dragons",
      html: `<p>Jekyll, as it turns out, is a very opinionated static site generator. During the building phase, it removes the previously generated files unless specified not to. This will, of course, become an issue if you want to run other automated tasks, such as through Gulp, since these tasks are now required to run <b>after</b> Jekyll's clean-up phase. As such, integrating my own <a href="https://github.com/wolfpilot/up-n-running-gulp-boilerplate" target="_blank" rel="noopener noreferrer">front-end boilerplate</a> required a decent amount of hacking and slashing in order to get things working again.

      Another point of contention is the folder structure. It's impossible to group blog posts and assets into the same subdirectories - Jekyll tries to convert everything into a post format; when it finds images, it can't parse the data properly, and so it just crashes. It's the classic case of "it's not a bug, it's a feature" that a few people tried to sort out (Nicolas Hoizey's <a href="https://github.com/nhoizey/jekyll-postfiles" target="_blank" rel="noopener noreferrer">Jekyll Post Files</a> is a good example, which unfortunately was crippled by the same <a href="https://github.com/nhoizey/jekyll-postfiles/issues/1" target="_blank" rel="noopener noreferrer">bug</a> I encountered and that no one can find a solution to). As a result, I gave up after a few tries of my own and just stuck with somewhat of a more default project structure.

      After I set up my source and distribution directories, the Github repo and so on, I was faced with Jekyll's Liquid syntax which, although intuitive, proved to be more cumbersome to read and write, as well as less flexible than PHP. It is, nonetheless, a life saver, as it allows for a very basic data management system via plain text files located in Jekyll's data include folder.
    </p>`,
    },
  },
  {
    type: "code",
    data: {
      language: "ruby",
      code: `|++ _src
  |++ _data
    |++ work
      |-- categories.json
      |-- projects.json
  |++ _includes
    |++ helpers
      |-- setup-assets.html
      |-- setup-page.html
      |-- setup-project.html
    |++ partials
      |-- intro.html
      |-- work.html
    |++ svg
  |++ _layouts
  |++ _posts
  |++ assets
    |++ _sass
    |++ css
    |++ docs
    |++ fonts
    |++ img
    |++ js
    |++ projects
      |++ cawr
        |++ case-study
          |-- 01.jpg
          |-- 02.jpg
          |-- …
        |-- cawr.jpg
        |-- cawr--thumb.jpg
      |++ corporate-ghost-recon
        |-- corporate-ghost-recon.jpg
        |-- corporate-ghost-recon--thumb.jpg
      |++ …
  |++ pages`,
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "Challenges",
      subheading: "(Continued)",
      html: `<p>Like previously mentioned, setting up Jekyll for a truly bespoke project proved to be more difficult than I initially imagined. Despite my many attempts to visualize the data on paper before starting the actual work, I still ended up refactoring it countless times: going from local page variables to external data files and ultimately integrating everything into collections, all in the name of modularising and DRYing out the code as much as possible.

      Perhaps the most difficult feature to both design and build was the showcase. It is, essentially, made up of three distinct modules: a gallery, a modal and a slider. As I soon discovered, the difficulty of building such a feature was not in coding each component by itself, but rather making them work together. I had to ensure that the data flows from one component to the next so that they all keep track of the current category and slide, as well as lazy load the relevant images when toggling a new category or triggering the modal. Long story short, that's how I ended up learning about and implementing the Pub/Sub JavaScript pattern. As a bonus, it was probably the first time that React's unidirectional data flow actually made sense to me.

      As I worked on the project however, I started to notice a number of faults and limitations of the original design. There was no space to add a blog, I had no way to display case studies and the site overall felt barren, lifeless, even a bit outdated. I decided to take it up a notch and ended up with what you see at the moment.
    </p>`,
    },
  },

  {
    type: "image",
    data: {
      src: Image3,
      alt: "Wolfpilot logo in high-res",
    },
  },
  {
    type: "textBlock",
    data: {
      heading: "In the works",
      subheading: "A list of future considerations",
      html: `<ul>
        <li>Create a blog and import old posts [WIP]</li>
        <li>Add keyboard support for the showcase slider</li>
        <li>Switch to Webpack and ES6</li>
        <li>Add a night reading theme</li>
      </ul>`,
    },
  },
]

export const pageData: PageData = {
  meta,
  summary,
  statement,
  content,
}

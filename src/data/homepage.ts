// Assets
import HeroImageSrc from "/public/media/graphics/wolf.png"
import AboutFeaturedImageSrc from "/public/media/photos/homepage-about-featured.jpg"

// Types
import { ShowcaseItem } from "@components/showcase/types"
import { Props as CasesProps } from "@components/cases/Cases"
import { Props as TimelineProps } from "@components/timeline/Timeline"

// Data
import { data as casePagesData } from "./cases"

export type ShowcaseItemRaw = Omit<ShowcaseItem, "thumb" | "image">

export interface ShowcaseDataRaw {
  items: ShowcaseItemRaw[]
}

const showcaseDataRaw: ShowcaseDataRaw = {
  items: [
    {
      id: "galactic-adventures-client",
      name: "Galactic Adventures Client",
      tagline:
        "Pick a destination, anywhere in this Universe you can think of, and go!",
      tags: ["featured", "web development", "web design"],
      alt: "Astronaut in suit walking across the surface of Mars.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/galactic-adventures-client",
        },
        {
          label: "Render",
          href: "https://wolfpilot-galactic-adventures-client.onrender.com/",
        },
      ],
    },
    {
      id: "galactic-adventures-server",
      name: "Galactic Adventures Server",
      tagline: "Back-end counterpart for the GA app.",
      tags: ["featured", "web development"],
      alt: "Code screenshot of a Back-End response.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/galactic-adventures-server",
        },
      ],
    },
    {
      id: "boids",
      name: "Boids",
      tagline: "Artificial life simulation using JS Canvas.",
      tags: ["featured", "web development"],
      alt: "Screenshot of multiple coloured blobs simulating flocking behaviour.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/boids",
        },
        {
          label: "Github",
          href: "https://wolfpilot.github.io/boids/",
        },
      ],
    },
    {
      id: "tom-holkenborg",
      name: "Tom Holkenborg",
      tagline: "Holywood film score composer, DJ, producer and engineer.",
      tags: ["featured", "web development"],
      alt: "Tom Holkenborg sitting on a chair in the middle of the desert, playing a piano.",
      links: [
        {
          label: "",
          href: "/cases/tom-holkenborg",
        },
        {
          label: "tomholkenborg",
          href: "https://tomholkenborg.com/",
        },
      ],
    },
    {
      id: "planet-blue-plc",
      name: "Planet Blue PLC",
      tagline: "Demo app for fictional sustainable energy provider.",
      tags: ["featured", "web development", "web design"],
      alt: "Logo showing a circle filled with wavey lines and text saying Planet Blue.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/planet-blue-plc",
        },
        {
          label: "Vercel",
          href: "https://planet-blue-plc.vercel.app/",
        },
      ],
    },
    {
      id: "demotivator-rest-api",
      name: "Demotivator REST API",
      tagline: "Feeling motivated? Stop it, now's not the time.",
      tags: ["web development"],
      alt: "Demotivational funny quotes.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/demotivator-rest-api",
        },
      ],
    },
    {
      id: "forever-darkness",
      name: "Forever Darkness",
      tagline:
        "Commissioned by Darcy Campbell as cover for his book 'Forever Darkness'.",
      tags: ["featured", "illustration"],
      alt: "Two warriors armed with futuristic shields and swords face a 4-legged giant insectoid on an alien world. A swarm can be seen in the background, gathered around a human ship.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Forever-Darkness-Book-Cover-332757595",
        },
      ],
    },
    {
      id: "colour-me",
      name: "Colour Me",
      tagline:
        "A simple speech-to-text app that changes background colour by voice.",
      tags: ["featured", "web development"],
      alt: "UI showing a centred image split in half with various debugging text being displayed.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/ColourMe",
        },
      ],
    },
    {
      id: "vandal",
      name: "Vandal",
      tagline: "The dream rat rod.",
      tags: ["featured", "illustration"],
      alt: "Rusted hot rod sitting in front of a sunset and a palm tree.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Vandal-396333301",
        },
      ],
    },
    {
      id: "welcome-to-my-world",
      name: "Welcome to my world",
      tagline:
        "Started as an exploration of vertical momentum, ended up planning my first house on the side of a mountain.",
      tags: ["featured", "illustration"],
      alt: "A young man resting on a tree admires a distant waterfall. 30 meters above, there is a small, rustic house on the cliffside.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Welcome-To-My-World-254089985",
        },
      ],
    },
    {
      id: "retrocade",
      name: "RetroCade",
      tagline: "Fun little experiment with CSS keyframe animations.",
      tags: ["featured", "web development"],
      alt: "Reel-to-reel tape recorder created in code only",
      links: [
        {
          label: "",
          href: "/cases/retrocade",
        },
        {
          label: "Codepen",
          href: "https://codepen.io/wolfpilot/pen/5a00949b8ade2d0010989e454dfe654f/",
        },
      ],
    },
    {
      id: "jungle-minds",
      name: "Jungle Minds",
      tagline: "Experience JM's new website in all its glory!",
      tags: ["featured", "web development"],
      alt: "Jungle Minds logo spelled out of geometrical shape.",
      links: [
        {
          label: "",
          href: "/cases/jungle-minds",
        },
        {
          label: "Jungle Minds",
          href: "https://www.jungleminds.com/",
        },
      ],
    },
    {
      id: "music-box",
      name: "Music B[]X",
      tagline:
        "A React + Redux music player app based on Facebook's ever so popular create-react-app tool.",
      tags: ["web development"],
      alt: "An album preview showing the track list and the artwork at the top.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/music-box",
        },
      ],
    },
    {
      id: "up-n-running",
      name: "Up n' running",
      tagline:
        "Simple boilerplate initially created as an alternative for its slightly older cousin, Grunt.",
      tags: ["web development"],
      alt: "Illustration of a plastic cup with a straw in it next to some text.",
      links: [
        {
          label: "Github",
          href: "https://github.com/wolfpilot/up-n-running-gulp-boilerplate",
        },
      ],
    },
    {
      id: "phone-concept",
      name: "Phone concept",
      tagline: "Prototyped using HTML, CSS and JavaScript only.",
      tags: ["web development"],
      alt: "Simple smartphone design with a power button on the right side and volume on the left.",
      links: [
        {
          label: "Codepen",
          href: "https://codepen.io/wolfpilot/full/NrqemV/",
        },
      ],
    },
    {
      id: "granada-capital-group",
      name: "Granada Capital Group",
      tagline:
        "Personal project for a fictive bank with the purpose of inspiring strength and security to Latin-based customers.",
      tags: ["web design"],
      alt: "A vectorized bull's head its within a Latin-decorated circle. The words 'Granada Capital Group' are written underneath.",
    },
    {
      id: "cawr",
      name: "CAWR",
      tagline:
        "New website design commissioned by Dr. Michel Pimbert for the Centre for Agroecology, Water & Resilience.",
      tags: ["web design"],
      alt: "Logo spells Centre for Agroecology, Water and Resilience.",
      links: [
        {
          label: "",
          href: "/cases/cawr",
        },
      ],
    },
    {
      id: "orc-shield",
      name: "Orc shield",
      tagline:
        "Orcs are not necessarily known for their crafting skills... or for any amount of logic.",
      tags: ["concept art"],
      alt: "Painting of a broken Orc shield. On its front, an eerie skull protrudes through the metal, grinning.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Orc-Shield-323026962",
        },
      ],
    },
    {
      id: "silhouettes",
      name: "Silhouettes",
      tagline: "A study of body language, shape and contrast.",
      tags: ["concept art"],
      alt: "Character shapes and a fully-fledged rendering of an Amazonian warrior.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Silhouettes-479116661",
        },
      ],
    },
    {
      id: "othor-warrior",
      name: "Othor warrior",
      tagline:
        "Commissioned by Isaac Bell for the Artifex Publishing House, Othor warriors are massive, well built humanoid amphibians that you'd best avoid calling 'Shrek'.",
      tags: ["concept art"],
      alt: "Green humanoid strapped in a shiny, scaled armour. Wields futuristic beam weapon.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Commission-Othor-Warrior-300991233",
        },
      ],
    },
    {
      id: "the-tulh",
      name: "The Tulh",
      tagline:
        "Commissioned by Isaac Bell for the Artifex Publishing House, the Tulh warrior is, at its core, a frog, spear-wielding humanoid.",
      tags: ["concept art"],
      alt: "Frog humanoid holding spear in hand. The spear emits light from its top, almost as if it's fire.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Commission-The-Tulh-300322013",
        },
      ],
    },
    {
      id: "corporate-ghost-recon",
      name: "Corporate Ghost Recon",
      tagline: "Many hours of painting later... * gasp * I want one!",
      tags: ["concept art"],
      alt: "Humanoid cybord wielding a futuristic energy weapon. Has a red light sensor in place of eyes and multiple antennas can be seen on its back.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Corporate-Ghost-Recon-289478028",
        },
      ],
    },
    {
      id: "grim-reaper",
      name: "Grim Reaper",
      tagline: "What do we say to the God of death?",
      tags: ["concept art"],
      alt: "Grim Reaper and his trusty scythe, a true classic.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Grim-Reaper-Commission-334034630",
        },
      ],
    },
    {
      id: "the-floating-city",
      name: "The Floating City",
      tagline:
        "The elders have seen many wondrous things during their lifetimes, but an entire city that floats?",
      tags: ["concept art"],
      alt: "Futuristic city floating above a canyon. Waterfalls can be seen flowing from huge pipes underneath the city. An old man watches silently from afar.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/The-Floating-City-290472146",
        },
      ],
    },
    {
      id: "nomad-warrior",
      name: "Nomad warrior",
      tagline:
        "Born out of an almost unhealthy obsession with deserts and warriors, the Nomad is a skilled assassin or a hero, depending on the side you stand on.",
      tags: ["concept art"],
      alt: "The desert warrior has fiery eyes and pulls a knife towards his chest. He's ready to defend himself from whatever he may face.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Nomad-Warrior-288896159",
        },
      ],
    },
    {
      id: "th-50-spectre-sniper-rifle",
      name: "TH-50 Spectre Sniper Rifle",
      tagline: "Can't go wrong with this one.",
      tags: ["concept art"],
      alt: "Plasma rifle. There are lights indicating the bullets left in the magazine, as well as heat sinks to allow for better cooling of the weapon",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/TH-50-SPECTRE-Sniper-Rifle-332046473",
        },
      ],
    },
    {
      id: "samurai-i",
      name: "Samurai I",
      tagline:
        "Influenced by Kekai Kotaki, the first speed painting in a series of grimy, slightly abstract character concepts.",
      tags: ["concept art"],
      alt: "The samurai is channeling energy into his left palm.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Samurai-I-264578714",
        },
      ],
    },
    {
      id: "red-fury",
      name: "Red Fury",
      tagline: "Breaking hearts has never been so much fun!",
      tags: ["concept art"],
      alt: "Surrounded by his minions, an Orc chieftain sacrifices a heart in a bloody explosion.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Red-Fury-265161473",
        },
      ],
    },
    {
      id: "scimitar",
      name: "Scimitar",
      tagline: "Elegance with a sharp edge.",
      tags: ["concept art"],
      alt: "Curved bladed weapon with a round Ruby encrusted into its handle.",
    },
    {
      id: "machina-inferni",
      name: "MACHINA INFERNI",
      tagline: "Who doesn't love mechs?",
      tags: ["illustration"],
      alt: "Half destroyed mecha on an alien moon. It's weilding a smoking gatling gun.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/M-A-C-H-I-N-A-I-N-F-E-R-N-I-303870376",
        },
      ],
    },
    {
      id: "steampunk-pirate",
      name: "Steampunk pirate",
      tagline: "One of my few attempts at proper lineart.",
      tags: ["illustration"],
      alt: "Female pirate dressed in a corset and puffed shirt. Has gun strapped to her chest.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Steampunk-Pirate-480076759",
        },
      ],
    },
    {
      id: "hello-there-old-friend",
      name: "Hello there, old friend",
      tagline: "In a mystical garden, two old souls meet again.",
      tags: ["illustration"],
      alt: "A rocky golem meets his old human friend in a garden of many luminous and colourful plants.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Hello-There-Old-Friend-292403819",
        },
      ],
    },
    {
      id: "toucan-study",
      name: "Toucan study",
      tagline:
        "Referenced from the cover of 'The Life of Birds' by David Attenborough.",
      tags: ["illustration"],
      alt: "The toucan sits on a branch looking above.",
      links: [
        {
          label: "DeviantArt",
          href: "https://n-deed.deviantart.com/art/Toucan-Study-419654587",
        },
      ],
    },
  ],
}

const casesItemsData = Object.keys(casePagesData).map((key) => {
  const data = casePagesData[key]

  return {
    id: data.meta.title.toLowerCase().replace(" ", "-"),
    title: data.meta.title,
    category: data.meta.category,
  }
})

export const casesData: CasesProps = {
  items: casesItemsData,
}

const timelineItemsData = [
  {
    position: "Individual Retail Trader",
    company: {
      label: "Self-Employed",
      href: "",
    },
    date: {
      start: "Jan 2021",
      end: "Present",
    },
    description: `• Trading spot and derivative contracts in Forex, Stocks and Cryptocurrencies.
    • Managing risk on a per trade basis
    • Journalling strategies, wins and losses, emotions
    • Researching projects, IPOs, ICOs
    • Interacting with DeFi (staking, smart contracts, LPs)
    • Developing custom indicators and automated strategies`,
  },
  {
    position: "Senior Front-End Developer",
    company: {
      label: "Jungle Minds",
      href: "https://www.jungleminds.com/",
    },
    date: {
      start: "Jul 2019",
      end: "Jan 2021",
    },
    description: `• Tech Lead for clients such as Tom Holkenborg, Leading Courses (BETA), Rouze and PON Automotive.
    • Rebuilt Jungle Minds’ new portfolio website.
    • Responsible for security audits (XSS, CSRF, privacy leaks, dependency vulnerabilities, pentesting).
    • Responsible for performance audits (Lighthouse reports, optimising bundle size and assets, FPS, repainting, memleaks).
    • Coaching team members.
    • Defining code review standards, merging strategies and conventions.`,
  },
  {
    position: "Senior Front-End Developer",
    company: {
      label: "Mirabeau",
      href: "https://www.mirabeau.nl/",
    },
    date: {
      start: "Jan 2019",
      end: "Jun 2019",
    },
    description: `• Lead Front-End Developer in charge of building user dashboard for employment mediator Brunel International. Tech stack comprised of React and GraphQL and full integration with Sitecore via JSS services.
    • Additional responsibilities included mentoring colleagues, performing weekly code reviews and holding cross-team workshops.`,
  },
  {
    position: "Front-End Developer",
    company: {
      label: "Mirabeau",
      href: "https://www.mirabeau.nl/",
    },
    date: {
      start: "Aug 2017",
      end: "Jun 2019",
    },
    description: `• Built the new applicant flow for Brunel International. I was tasked with setting up the project, implementing custom form validation throughout, tracking user behaviour and last, but not least, making things pretty.
    • Reviewed applicants and carried out job interviews.
    • Contributed regularly to Mirabeau’s open-source boilerplate repo.`,
  },
  {
    position: "Front-End Developer",
    company: {
      label: "Propeller Communications",
      href: "https://www.propeller.co.uk/",
    },
    date: {
      start: "Jul 2015",
      end: "Jul 2017",
    },
    description: `• Flexible Front-End role where I occasionally got to wear the almighty full-stack hat. I built websites in FuelPHP and WordPress, while also managing a few multi-site templates for hospitality clients.
    • Workflow included automation via Gulp, BEM methodology using
    SASS and version control through Git.`,
  },
  {
    position: "Web Designer & Developer",
    company: {
      label: "Freelance",
      href: "",
    },
    date: {
      start: "Jun 2013",
      end: "Jul 2015",
    },
    description: `Responsible for project planning with clients, negotiating contracts, developing wireframes, mock-ups and high-end designs, as well as coding and maintaining websites.`,
  },
  {
    position: "Concept Artist & Illustrator",
    company: {
      label: "Freelance",
      href: "",
    },
    date: {
      start: "May 2012",
      end: "May 2015",
    },
    description: `• Designed album covers for Toadstool - The Visitors, Cavendish - Positive Trailers and New Paradigm - Faultlines
    • Worked on several book covers and character concepts for various novelists and authors
    • Commisioned for a variety of concept art and illustration pieces, including D&D characters and fan art`,
  },
]

export const timelineData: TimelineProps = {
  items: timelineItemsData,
}

export const data = {
  about: {
    hero: {
      img: {
        src: HeroImageSrc,
        alt: "Digital portrait of a wolf wearing aviator goggles",
      },
      title: "About",
      text: `There are coders, there are artists, and then again there are people who
        just can't decide. Also, insomniacs. I'm part of the last two.`,
    },
    card: {
      featuredImg: {
        src: AboutFeaturedImageSrc,
        alt: "Photo of Razvan Negrea",
        priority: true,
      },
      heading: `My name is <em>Razvan Negrea</em>.`,
      copy: `I'm a creative frontend developer, concept artist and illustrator, which is fancy talk for saying that I enjoy making things, moving things especially.
  
      Creative frontend developer, designer, concept artist & illustrator, music aficionado, occasional self-proclaimed chef and a general nut for colours. Originally from Romania, the land of vampires, Dracula and other such myths, I now live in the lovely city of Amsterdam, NL, where I sip tea every couple of minutes and judge people on the Internet when I get the chance for it.`,
    },
  },
  work: {
    heading: "Work",
    description: "Take a look at some of my projects",
    showcase: showcaseDataRaw,
  },
  caseStudies: {
    heading: "Case Studies",
    description:
      "See what goes in the mind of ze creator. A collection of ramblings behind works of all sorts",
    cases: casesData,
  },
  experience: {
    heading: "Experience",
    description: "My timeline as a working professional",
    timeline: timelineData,
  },
}

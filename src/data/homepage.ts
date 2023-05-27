// Assets
import HeroImageSrc from "/public/images/graphics/wolf.png"
import AboutFeaturedImageSrc from "/public/images/photos/homepage-about-featured.jpg"

// Types
import { ShowcaseItem } from "@components/showcase/Showcase"

export type ShowcaseItemRaw = Omit<ShowcaseItem, "thumb" | "image">
export interface ShowcaseDataRaw {
  items: ShowcaseItemRaw[]
}

const showcaseDataRaw: ShowcaseDataRaw = {
  items: [
    {
      id: "up-n-running",
      name: "Up n' running",
      tagline:
        "Simple boilerplate initially created as an alternative for its slightly older cousin, Grunt.",
      tags: ["featured", "web development"],
      alt: "Illustration of a plastic cup with a straw in it next to some text.",
      links: [
        {
          label: "Github",
          url: "https://github.com/wolfpilot/up-n-running-gulp-boilerplate",
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
          url: "https://n-deed.deviantart.com/art/Forever-Darkness-Book-Cover-332757595",
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
          url: "https://github.com/wolfpilot/ColourMe",
        },
      ],
    },
    {
      id: "music-box",
      name: "Music B[]X",
      tagline:
        "A React + Redux music player app based on Facebook's ever so popular create-react-app tool.",
      tags: ["featured", "web development"],
      alt: "An album preview showing the track list and the artwork at the top.",
      links: [
        {
          label: "Github",
          url: "https://github.com/wolfpilot/music-box",
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
          url: "/case-studies/retrocade",
        },
        {
          label: "Codepen",
          url: "https://codepen.io/wolfpilot/pen/5a00949b8ade2d0010989e454dfe654f/",
        },
      ],
    },
    {
      id: "machina-inferni",
      name: "MACHINA INFERNI",
      tagline: "Who doesn't love mechs?",
      tags: ["featured", "illustration"],
      alt: "Half destroyed mecha on an alien moon. It's weilding a smoking gatling gun.",
      links: [
        {
          label: "DeviantArt",
          url: "https://n-deed.deviantart.com/art/M-A-C-H-I-N-A-I-N-F-E-R-N-I-303870376",
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
          url: "https://n-deed.deviantart.com/art/Welcome-To-My-World-254089985",
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
          url: "https://n-deed.deviantart.com/art/Vandal-396333301",
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
          url: "https://codepen.io/wolfpilot/full/NrqemV/",
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
          url: "/case-studies/cawr",
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
          url: "https://n-deed.deviantart.com/art/Orc-Shield-323026962",
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
          url: "https://n-deed.deviantart.com/art/Silhouettes-479116661",
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
          url: "https://n-deed.deviantart.com/art/Commission-Othor-Warrior-300991233",
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
          url: "https://n-deed.deviantart.com/art/Commission-The-Tulh-300322013",
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
          url: "https://n-deed.deviantart.com/art/Corporate-Ghost-Recon-289478028",
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
          url: "https://n-deed.deviantart.com/art/Grim-Reaper-Commission-334034630",
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
          url: "https://n-deed.deviantart.com/art/The-Floating-City-290472146",
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
          url: "https://n-deed.deviantart.com/art/Nomad-Warrior-288896159",
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
          url: "https://n-deed.deviantart.com/art/TH-50-SPECTRE-Sniper-Rifle-332046473",
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
          url: "https://n-deed.deviantart.com/art/Samurai-I-264578714",
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
          url: "https://n-deed.deviantart.com/art/Red-Fury-265161473",
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
      id: "steampunk-pirate",
      name: "Steampunk pirate",
      tagline: "One of my few attempts at proper lineart.",
      tags: ["illustration"],
      alt: "Female pirate dressed in a corset and puffed shirt. Has gun strapped to her chest.",
      links: [
        {
          label: "DeviantArt",
          url: "https://n-deed.deviantart.com/art/Steampunk-Pirate-480076759",
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
          url: "https://n-deed.deviantart.com/art/Hello-There-Old-Friend-292403819",
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
          url: "https://n-deed.deviantart.com/art/Toucan-Study-419654587",
        },
      ],
    },
  ],
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
}

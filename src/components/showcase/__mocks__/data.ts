// Types
import { ShowcaseItem, Tag } from "../types"

export const mockItems: ShowcaseItem[] = [
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
        type: "external",
      },
    ],
    thumb: {
      src: "/images/showcase/up-n-running/up-n-running--thumb.jpg",
      width: 620,
      height: 372,
      alt: "Illustration of a plastic cup with a straw in it next to some text.",
    },
    image: {
      src: "/images/showcase/up-n-running/up-n-running.jpg",
      width: 2000,
      height: 1200,
      alt: "Illustration of a plastic cup with a straw in it next to some text.",
    },
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
        type: "external",
      },
    ],
    thumb: {
      src: "/images/showcase/forever-darkness/forever-darkness--thumb.jpg",
      width: 620,
      height: 805,
      alt: "Two warriors armed with futuristic shields and swords face a 4-legged giant insectoid on an alien world. A swarm can be seen in the background, gathered around a human ship.",
    },
    image: {
      src: "/images/showcase/forever-darkness/forever-darkness.jpg",
      width: 720,
      height: 935,
      alt: "Two warriors armed with futuristic shields and swords face a 4-legged giant insectoid on an alien world. A swarm can be seen in the background, gathered around a human ship.",
    },
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
        type: "external",
      },
    ],
    thumb: {
      src: "/images/showcase/machina-inferni/machina-inferni--thumb.jpg",
      width: 620,
      height: 349,
      alt: "Half destroyed mecha on an alien moon. It's weilding a smoking gatling gun.",
    },
    image: {
      src: "/images/showcase/machina-inferni/machina-inferni.jpg",
      width: 2000,
      height: 1125,
      alt: "Half destroyed mecha on an alien moon. It's weilding a smoking gatling gun.",
    },
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
        type: "external",
      },
    ],
    thumb: {
      src: "/images/showcase/welcome-to-my-world/welcome-to-my-world--thumb.jpg",
      width: 620,
      height: 1250,
      alt: "A young man resting on a tree admires a distant waterfall. 30 meters above, there is a small, rustic house on the cliffside.",
    },
    image: {
      src: "/images/showcase/welcome-to-my-world/welcome-to-my-world.jpg",
      width: 889,
      height: 2000,
      alt: "A young man resting on a tree admires a distant waterfall. 30 meters above, there is a small, rustic house on the cliffside.",
    },
  },
]

export const mockTags: Tag[] = [
  "featured",
  "web development",
  "web design",
  "concept art",
  "illustration",
]

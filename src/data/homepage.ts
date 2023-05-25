// Assets
import HeroImageSrc from "/public/images/graphics/wolf.png"
import AboutFeaturedImageSrc from "/public/images/photos/homepage-about-featured.jpg"

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
}

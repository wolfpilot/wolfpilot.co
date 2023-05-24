import { useRef } from "react"
import Image, { ImageProps } from "next/image"
import styled from "styled-components"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Text from "@components/generic/Text"

export interface Props {
  featuredImg: ImageProps
  heading: string
  copy: string
}

// Setup
const PARALLAX_SCROLL_DISTANCE = -50

const useParallax = (value: MotionValue<number>, distance: number) =>
  useTransform(value, [0, 1], [-distance, distance])

const Card: React.FC<Props> = ({ featuredImg, heading, copy }) => {
  const wrapperRef = useRef(null)

  // Parallax
  const { scrollYProgress } = useScroll({ target: wrapperRef })
  const y = useParallax(scrollYProgress, PARALLAX_SCROLL_DISTANCE)

  if (!featuredImg || !heading || !copy) return null

  return (
    <Wrapper ref={wrapperRef}>
      {featuredImg?.src && (
        <FeaturedImageWrapper>
          <FeaturedImage
            src={featuredImg.src}
            alt={featuredImg.alt || ""}
            style={{ y }}
          />
        </FeaturedImageWrapper>
      )}

      <Content>
        <Heading dangerouslySetInnerHTML={{ __html: heading }} />
        <Text>{copy}</Text>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  border-radius: var(--border-radius-sml);
  background-color: var(--c-black);

  ${mq.from.M`
    display: flex;
  `}

  ${mq.from.XL`
    width: calc(10 * var(--grid-column-size) + 9 * var(--grid-gutter-size));
  `}
`

const FeaturedImageWrapper = styled.div`
  position: relative;

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(4 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
  `}

  ${mq.from.XL`
    width: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--g-accent-diagonal);
    mix-blend-mode: darken;
    pointer-events: none;
  }
`

const FeaturedImage = styled(motion(Image))`
  position: relative;
  // Centre image due to extra height
  top: -10%;
  display: block;
  width: 100%;
  // Make image taller to compensate for parallax motion
  height: 120%;
  object-fit: cover;
  line-height: 0;
  filter: saturate(0);
`

const Content = styled.div`
  padding: calc(2 * var(--spacing-default)) var(--spacing-default);
  color: var(--c-white);

  ${mq.from.M`
    width: calc(4 * var(--grid-column-size) + 4 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(8 * var(--grid-column-size) + 8 * var(--grid-gutter-size));
  `}

  ${mq.from.XL`
    width: calc(7 * var(--grid-column-size) + 7 * var(--grid-gutter-size));
  `}
`

const Heading = styled.h2`
  /* Custom style for emphasis text */
  em {
    color: var(--c-accent2);
    font-style: normal;
  }
`

export default Card

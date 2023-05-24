import Image, { ImageProps } from "next/image"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Text from "@components/generic/Text"

export interface Props {
  featuredImg: ImageProps
  heading: string
  copy: string
}

const Card: React.FC<Props> = ({ featuredImg, heading, copy }) => {
  if (!featuredImg || !heading || !copy) return null

  return (
    <Wrapper>
      {featuredImg?.src && (
        <FeaturedImageWrapper>
          <FeaturedImage src={featuredImg.src} alt={featuredImg.alt || ""} />
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
    width: calc(10 * var(--base-column-size) + 9 * var(--base-gutter));
  `}
`

const FeaturedImageWrapper = styled.div`
  position: relative;

  ${mq.from.M`
    width: calc(2 * var(--base-column-size) + var(--base-gutter));
  `}

  ${mq.from.L`
    width: calc(4 * var(--base-column-size) + 3 * var(--base-gutter));
  `}

  ${mq.from.XL`
    width: calc(3 * var(--base-column-size) + 2 * var(--base-gutter));
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

const FeaturedImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  line-height: 0;
  filter: saturate(0);
`

const Content = styled.div`
  padding: calc(2 * var(--spacing-default)) var(--spacing-default);
  color: var(--c-white);

  ${mq.from.M`
    width: calc(4 * var(--base-column-size) + 4 * var(--base-gutter));
  `}

  ${mq.from.L`
    width: calc(8 * var(--base-column-size) + 8 * var(--base-gutter));
  `}

  ${mq.from.XL`
    width: calc(7 * var(--base-column-size) + 7 * var(--base-gutter));
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

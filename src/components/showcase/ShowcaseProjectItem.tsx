import Image from "next/image"
import styled from "styled-components"

// Types
import { ShowcaseItem } from "./Showcase"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export type Props = Pick<ShowcaseItem, "name" | "tagline" | "thumb">

const ShowcaseProjectItem: React.FC<Props> = ({ name, tagline, thumb }) => (
  <Wrapper>
    {name && tagline && thumb?.src && (
      <ProjectItemThumbnailWrapper>
        <ProjectItemThumbnail
          src={thumb.src}
          sizes={`
                (min-width: ${mq.breakpoints.L}px) 456px,
                (min-width: ${mq.breakpoints.M}px) 50vw,
                100vw,
                `}
          width={thumb.width}
          height={thumb.height}
          alt={thumb.alt}
        />
      </ProjectItemThumbnailWrapper>
    )}

    <ProjectItemContent>
      {name && <ProjectItemName level="h3">{name}</ProjectItemName>}

      {tagline && <ProjectItemTagline>{tagline}</ProjectItemTagline>}
    </ProjectItemContent>
  </Wrapper>
)

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-sml);
  background-color: var(--c-neutral4);

  &:not(:last-of-type) {
    margin-bottom: var(--grid-gutter-size);
  }
`

const ProjectItemThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ProjectItemThumbnail = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* A little border to help out with item separation on one column */
  border-width: 2px;
  border-color: var(--c-neutral4);
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-left-radius: var(--border-radius-sml);
  border-top-right-radius: var(--border-radius-sml);

  ${mq.from.M`
    border: none;
  `}
`

const ProjectItemContent = styled.div`
  padding: var(--spacing-default);
`

const ProjectItemName = styled(Heading)``

const ProjectItemTagline = styled(Text)``

export default ShowcaseProjectItem

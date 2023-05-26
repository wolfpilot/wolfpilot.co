import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"

// Types
import { ShowcaseItem } from "./Showcase"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { duration, ease } from "@styles/animation"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export type Props = Pick<ShowcaseItem, "name" | "tagline" | "thumb">

const ShowcaseProjectItem: React.FC<Props> = ({ name, tagline, thumb }) => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)

  const hanldeImgLoadingComplete = () => {
    setIsImgLoaded(true)
  }

  return (
    <Wrapper>
      {name && tagline && thumb?.src && (
        <ProjectItemThumbnailWrapper $isLoaded={isImgLoaded}>
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
            onLoadingComplete={hanldeImgLoadingComplete}
            $isLoaded={isImgLoaded}
          />
        </ProjectItemThumbnailWrapper>
      )}

      <ProjectItemContent $isLoaded={isImgLoaded}>
        {name && <Heading level="h3">{name}</Heading>}
        {tagline && <Text>{tagline}</Text>}
      </ProjectItemContent>
    </Wrapper>
  )
}

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

const ProjectItemThumbnailWrapper = styled.div<{ $isLoaded: boolean }>`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--c-neutral4);
    transform: ${({ $isLoaded }) =>
      $isLoaded ? "translateY(100%)" : "translateY(0)"};
    transition: transform ${duration.verySlow}s ${ease.cubic};
  }
`

const ProjectItemThumbnail = styled(Image)<{ $isLoaded: boolean }>`
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
  transform: ${({ $isLoaded }) => ($isLoaded ? "scale(1)" : "scale(1.25)")};
  transition: transform ${duration.verySlow}s ${ease.cubic};

  ${mq.from.M`
    border: none;
  `}
`

const ProjectItemContent = styled.div<{ $isLoaded: boolean }>`
  padding: var(--spacing-default);
  ${({ $isLoaded }) =>
    $isLoaded
      ? `
      opacity: 1;
      transform: translateY(0);
    `
      : `
      opacity: 0;
      transform: translateY(-10px);
    `}
  transition:
    opacity ${duration.verySlow}s ${ease.cubic} ${duration.fast}s,
    transform ${duration.verySlow}s ${ease.cubic} ${duration.fast}s;
`

export default ShowcaseProjectItem

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styled, { css } from "styled-components"

// Types
import { Route } from "@ts/routes"
import { ShowcaseItem } from "./Showcase"

// Utils
import { getDomain } from "@utils/routeHelper"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { duration, ease } from "@styles/animation"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export type Props = Pick<ShowcaseItem, "name" | "tagline" | "thumb" | "links">

// Helpers
const renderLinkText = (link: Route) => {
  if (!link || !link.type || !link.url) return null

  return link.type === "external" ? (
    <>
      View on{" "}
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {getDomain(link.url)}
      </a>
    </>
  ) : (
    <>
      Go to <Link href={link.url}>case study</Link>
    </>
  )
}

const ShowcaseProjectItem: React.FC<Props> = ({
  name,
  tagline,
  thumb,
  links,
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)

  const hanldeImgLoadingComplete = () => {
    setIsImgLoaded(true)
  }

  if (
    !name ||
    !tagline ||
    !thumb ||
    !thumb.src ||
    !thumb.width ||
    !thumb.height
  ) {
    return null
  }

  return (
    <Wrapper>
      <ThumbnailWrapper $isLoaded={isImgLoaded}>
        <Thumbnail
          src={thumb.src}
          sizes={`
            (min-width: ${mq.breakpoints.L}px) 456px,
            (min-width: ${mq.breakpoints.M}px) 50vw,
            100vw,
            `}
          width={thumb.width}
          height={thumb.height}
          alt={thumb.alt || ""}
          onLoadingComplete={hanldeImgLoadingComplete}
          $isLoaded={isImgLoaded}
        />
      </ThumbnailWrapper>

      <ContentWrapper $isLoaded={isImgLoaded}>
        <ContentPrimary>
          <Heading level="h3">{name}</Heading>
          <Text>{tagline}</Text>
        </ContentPrimary>

        <ContentSecondary>
          <Heading level="h3">Project details</Heading>

          {links?.length ? (
            <Links>
              {links.map((link, index) => (
                <li key={index}>{renderLinkText(link)}</li>
              ))}
            </Links>
          ) : (
            <Text>Zoom in to view more</Text>
          )}
        </ContentSecondary>
      </ContentWrapper>
    </Wrapper>
  )
}

// Helper styles
const pseudoEntryStyles = css<{ $isLoaded: boolean }>`
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--c-neutral4);
  transform: ${({ $isLoaded }) =>
    $isLoaded ? "translateY(100%)" : "translateY(0)"};
  transition: transform ${duration.verySlow}s ${ease.cubic};
`

const pseudoHoverStyles = css`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--g-secondary-diagonal);
  mix-blend-mode: exclusion;
  transform: scaleY(0);
  transform-origin: top center;
  pointer-events: none;
  transition: transform ${duration.slow}s ${ease.cubic};
`

// Main styles
const ThumbnailWrapper = styled.div<{ $isLoaded: boolean }>`
  position: relative;
  overflow: hidden;
  // Hide corners again due to mix-blend-mode showing through regardless of parent styles
  border-top-left-radius: var(--border-radius-sml);
  border-top-right-radius: var(--border-radius-sml);

  // Decorative pseudo-element shown on image load
  &::before {
    ${pseudoEntryStyles};
  }

  // Decorative pseudo-element shown on item hover
  &::after {
    ${pseudoHoverStyles};
  }
`

const Thumbnail = styled(Image)<{ $isLoaded: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: ${({ $isLoaded }) => ($isLoaded ? "scale(1)" : "scale(1.25)")};
  transition: transform ${duration.verySlow}s ${ease.cubic};
`

const ContentWrapper = styled.div<{ $isLoaded: boolean }>`
  padding: var(--spacing-default);

  // Set a background-color for mix-blend-mode to work with
  background-color: var(--c-neutral4);

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

  // Decorative pseudo-element shown on item hover
  &::after {
    ${pseudoHoverStyles};
  }
`

const ContentPrimary = styled.div`
  transition: visibility ${duration.slow}s ${ease.cubic} ${duration.medium}s,
    opacity ${duration.slow}s ${ease.cubic} ${duration.medium}s,
    transform ${duration.slow}s ${ease.cubic} ${duration.medium}s;
`

const ContentSecondary = styled.div`
  position: absolute;
  top: var(--spacing-default);
  left: var(--spacing-default);
  visibility: hidden;
  opacity: 0;
  transform: translateY(-20px);
  transition: visibility ${duration.slow}s ${ease.cubic},
    opacity ${duration.slow}s ${ease.cubic},
    transform ${duration.slow}s ${ease.cubic};
`

const Links = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--c-neutral4);
  // A little border to help out with visual separation between items on mobile
  border-width: 2px;
  border-color: var(--c-neutral4);
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-radius: var(--border-radius-sml);

  ${mq.from.M`
    border: none;
  `}

  &:not(:last-of-type) {
    margin-bottom: var(--grid-gutter-size);
  }

  &:hover {
    ${ThumbnailWrapper},
    ${ContentWrapper} {
      &::after {
        transform: scaleY(1);
      }
    }

    ${ContentPrimary} {
      visibility: hidden;
      opacity: 0;
      transform: translateY(20px);
      transition: visibility ${duration.slow}s ${ease.cubic},
        opacity ${duration.slow}s ${ease.cubic},
        transform ${duration.slow}s ${ease.cubic};
    }

    ${ContentSecondary} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition: visibility ${duration.slow}s ${ease.cubic} ${duration.medium}s,
        opacity ${duration.slow}s ${ease.cubic} ${duration.medium}s,
        transform ${duration.slow}s ${ease.cubic} ${duration.medium}s;
    }
  }
`

export default ShowcaseProjectItem

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import styled from "styled-components"
import { Variants, AnimatePresence, motion } from "framer-motion"

// Types
import { Anchor } from "@ts/dom"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { duration, ease } from "@styles/animation"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export type Tag =
  | "featured"
  | "web development"
  | "web design"
  | "concept art"
  | "illustration"
export type LinkType = "ext" | "int"

export interface ShowcaseItemLink extends Anchor {
  type: LinkType
}

export interface ShowcaseItem {
  id: string
  name: string
  tagline: string
  tags: Tag[]
  thumb: ImageProps
  image: ImageProps
  alt: string
  links?: ShowcaseItemLink[]
}

export interface Props {
  items: ShowcaseItem[]
}

// Setup
const tags: Tag[] = [
  "featured",
  "web development",
  "web design",
  "concept art",
  "illustration",
]

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Showcase: React.FC<Props> = ({ items }) => {
  const [activeTag, setActiveTag] = useState<Tag>("featured")

  if (!items?.length) return null

  const handleClickTag = (newTag: Tag) => {
    setActiveTag(newTag)
  }

  const activeItems = items.filter((item) => item.tags.includes(activeTag))

  return (
    <Wrapper>
      <NavList>
        {tags.map((tag, index) => {
          const taggedItemsAmount = items
            .filter((item) => item.tags.includes(tag))
            .reduce((sum, _) => sum + 1, 0)

          return (
            <NavItem key={index}>
              <NavItemButton
                $isActive={activeTag === tag}
                onClick={() => handleClickTag(tag)}
              >
                {tag} <sup>{taggedItemsAmount}</sup>
              </NavItemButton>
              <NavItemSpacer>
                {index !== tags.length - 1 && " | "}
              </NavItemSpacer>
            </NavItem>
          )
        })}
      </NavList>

      <AnimatePresence initial={false} mode="wait">
        {activeItems && (
          <ProjectList
            key={activeTag}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {activeItems.map((item) => (
              <ProjectItem key={item.id}>
                {item.name && item.tagline && item.thumb?.src && (
                  <ProjectItemThumbnailWrapper>
                    <ProjectItemThumbnail
                      src={item.thumb.src}
                      sizes={`
                      (min-width: ${mq.breakpoints.L}px) 456px,
                      (min-width: ${mq.breakpoints.M}px) 50vw,
                      100vw,
                    `}
                      width={item.thumb.width}
                      height={item.thumb.height}
                      alt={item.thumb.alt}
                    />
                  </ProjectItemThumbnailWrapper>
                )}

                <ProjectItemContent>
                  {item.name && (
                    <ProjectItemName level="h3">{item.name}</ProjectItemName>
                  )}

                  {item.tagline && (
                    <ProjectItemTagline>{item.tagline}</ProjectItemTagline>
                  )}
                </ProjectItemContent>
              </ProjectItem>
            ))}
          </ProjectList>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  margin-bottom: var(--spacing-default);
  padding-right: calc(var(--spacing-default) / 2);
  padding-left: calc(var(--spacing-default) / 2);
  background-color: var(--c-neutral5);

  ${mq.from.L`
    justify-content: flex-start;
    background: none;
  `}
`

const NavItem = styled.li`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;

  ${mq.from.L`
    margin-top: 0;
    margin-bottom: 0;
  `}
`

const NavItemButton = styled.button<{ $isActive: boolean }>`
  padding: 4px 0;
  outline: none;
  border: none;
  background: none;
  color: ${({ $isActive }) =>
    $isActive ? "var(--c-accent2)" : "var(--c-neutral1)"};
  transition: color ${duration.medium}s ${ease.cubic};

  &:focus {
    color: var(--c-black);
  }

  &:hover {
    color: var(--c-accent2);
  }
`

const NavItemSpacer = styled.div`
  display: block;
  margin-right: calc(var(--spacing-default) / 2);
  margin-left: calc(var(--spacing-default) / 2);
  color: var(--c-neutral2);
`

const ProjectList = styled(motion.div)`
  ${mq.from.M`
    column-count: 2;
    column-gap: var(--grid-gutter);
  `}

  ${mq.from.L`
    column-count: 3;
  `}
`

const ProjectItem = styled.div`
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

  &::after {
    /* content: ""; */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--c-accent2);
    opacity: 0.5;
  }
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

export default Showcase

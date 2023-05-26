import { useState } from "react"
import Image, { ImageProps } from "next/image"
import styled from "styled-components"

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

      {activeItems && (
        <ProjectList>
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
    </Wrapper>
  )
}

const Wrapper = styled.div``

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 0;
  margin-bottom: var(--spacing-default);
  padding: 0;
`

const NavItem = styled.li`
  display: flex;
`

const NavItemButton = styled.button<{ $isActive: boolean }>`
  padding: 4px 0;
  outline: none;
  border: none;
  background: none;
  color: ${({ $isActive }) =>
    $isActive ? "var(--c-accent2)" : "var(--c-neutral3)"};
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover {
    color: var(--c-accent2);
  }
`

const NavItemSpacer = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  color: var(--c-neutral3);
`

const ProjectList = styled.div`
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
`

const ProjectItemThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ProjectItemContent = styled.div`
  padding: var(--spacing-default);
`

const ProjectItemName = styled(Heading)``

const ProjectItemTagline = styled(Text)``

export default Showcase

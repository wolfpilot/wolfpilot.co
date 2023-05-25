import fs from "fs"
import path from "path"
import sizeOf from "image-size"
import Image from "next/image"
import styled from "styled-components"

// Types
import { NextPage, GetStaticProps } from "next"

// Data
import { data as rawData, ShowcaseItemRaw } from "@data/homepage"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"

// Components
import Container from "@components/layout/Container"
import HeadingComponent from "@components/generic/Heading"
import Text from "@components/generic/Text"
import Card from "@components/generic/Card"
import Showcase from "@components/showcase/Showcase"

export interface Props {
  pageData: any
}

const HomePage: NextPage<Props> = ({ pageData }) => {
  if (!pageData) return null

  return (
    <>
      {pageData.about && (
        <Section id="about">
          <Container>
            {pageData.about.hero && (
              <Hero>
                {pageData.about.hero.img && (
                  <HeroImageWrapper>
                    <HeroBackdrop>
                      <HeroImage {...pageData.about.hero.img} />
                    </HeroBackdrop>
                  </HeroImageWrapper>
                )}

                {pageData.about.hero.title && (
                  <HeroHeading level="h1">
                    {pageData.about.hero.title}
                  </HeroHeading>
                )}
                {pageData.about.hero.text && (
                  <Text>{pageData.about.hero.text}</Text>
                )}
              </Hero>
            )}

            {pageData.about.card && <Card {...pageData.about.card} />}
          </Container>
        </Section>
      )}

      {pageData.work && (
        <Section id="work">
          <Container>
            <SectionHeader>
              {pageData.work.heading && (
                <SectionHeading level="h2">
                  {pageData.work.heading}
                </SectionHeading>
              )}

              {pageData.work.description && (
                <Text>{pageData.work.description}</Text>
              )}
            </SectionHeader>

            {pageData.work.showcase && <Showcase {...pageData.work.showcase} />}
          </Container>
        </Section>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const baseShowcaseUrl = "/images/showcase"

  const publicPath = path.join(process.cwd(), "public")
  const baseShowcasePath = `${publicPath}/images/showcase/`

  const { work: workData } = rawData

  /**
   * Generate additional data required by Next to serve static assets
   */
  const generateImageData = (item: ShowcaseItemRaw, isThumb: boolean) => {
    const suffix = isThumb
      ? `${item.id}/${item.id}--thumb.jpg`
      : `${item.id}/${item.id}.jpg`

    const src = `${baseShowcaseUrl}/${suffix}`
    const path = `${baseShowcasePath}/${suffix}`

    const data = fs.readFileSync(path)
    const { width, height } = sizeOf(data)

    return {
      src,
      width,
      height,
      alt: item.alt,
    }
  }

  const parsedWorkItems = workData.showcase.items.map((item) => ({
    ...item,
    thumb: generateImageData(item, true),
    image: generateImageData(item, false),
  }))

  return {
    props: {
      pageData: {
        ...rawData,
        work: {
          ...rawData.work,
          showcase: {
            ...rawData.work.showcase,
            items: parsedWorkItems,
          },
        },
      },
    },
  }
}

const Section = styled.section`
  margin-bottom: var(--spacing-section);
`

const SectionHeader = styled.div`
  margin-bottom: var(--spacing-block);
`

const SectionHeading = styled(HeadingComponent)`
  ${textStyles.headingL};
`

const Hero = styled.div`
  padding-top: calc(2 * var(--spacing-block));
  padding-bottom: calc(3 * var(--spacing-block));
  text-align: center;
`

const HeroImageWrapper = styled.div`
  position: relative;
  margin-bottom: calc(2 * var(--spacing-block));
`

const HeroBackdrop = styled.div`
  width: calc(2 * var(--grid-column-size));
  height: calc(2 * var(--grid-column-size));
  margin: 0 auto;
  background: var(--g-accent-diagonal);
  border-radius: 50%;

  ${mq.from.S`
    width: calc(1.5 * var(--grid-column-size));
    height: calc(1.5 * var(--grid-column-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size));
    height: calc(2 * var(--grid-column-size));
  `}

  ${mq.from.L`
    width: calc(2 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
    height: calc(2 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
  `}
`

const HeroImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(2 * var(--grid-column-size) - 2 * var(--grid-gutter-size));
  height: auto;
  mix-blend-mode: darken;
  transform: translate(-50%, -45%);

  ${mq.from.S`
    width: calc(1.5 * var(--grid-column-size) - 1.5 * var(--grid-gutter-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) - 2 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(2 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}
`

const HeroHeading = styled(HeadingComponent)`
  ${textStyles.headingM};
`

export default HomePage

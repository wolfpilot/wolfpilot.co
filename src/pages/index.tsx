import fs from "fs"
import path from "path"
import sizeOf from "image-size"
import { ImageProps } from "next/image"
import { NextSeo } from "next-seo"

// Types
import { NextPage, GetStaticProps } from "next"
import { Route } from "@ts/routes"

// Data
import { data as rawData, ShowcaseItemRaw } from "@data/homepage"

// Utils
import { getLinkType } from "@utils/routeHelper"

// Styles
import * as S from "@styles/pages/homepage"

// Components
import Container from "@components/layout/Container/Container"
import Text from "@components/generic/Text"
import Card from "@components/generic/Card"
import Showcase from "@components/showcase/Showcase"
import Cases from "@components/cases/Cases"
import Timeline from "@components/timeline/Timeline"
import Contact from "@components/contact/Contact"

export interface Props {
  pageData: any
}

// Setup
const META_TITLE = "Homepage"
const META_DESCRIPTION =
  "Creative front-end developer, concept artist & illustrator"

const HomePage: NextPage<Props> = ({ pageData }) => {
  if (!pageData) return null

  return (
    <>
      <NextSeo title={META_TITLE} description={META_DESCRIPTION} />

      {pageData.about && (
        <S.Section id="about">
          <Container>
            {pageData.about.hero && (
              <S.Hero>
                {pageData.about.hero.img && (
                  <S.HeroImageWrapper>
                    <S.HeroBackdrop>
                      <S.HeroImage {...pageData.about.hero.img} />
                    </S.HeroBackdrop>
                  </S.HeroImageWrapper>
                )}

                {pageData.about.hero.title && (
                  <S.HeroHeading level="h1">
                    {pageData.about.hero.title}
                  </S.HeroHeading>
                )}
                {pageData.about.hero.text && (
                  <Text>{pageData.about.hero.text}</Text>
                )}
              </S.Hero>
            )}

            {pageData.about.card && <Card {...pageData.about.card} />}
          </Container>
        </S.Section>
      )}

      {pageData.work && (
        <S.Section id="work">
          <Container>
            <S.SectionHeader>
              {pageData.work.heading && (
                <S.SectionHeading level="h2">
                  {pageData.work.heading}
                </S.SectionHeading>
              )}

              {pageData.work.description && (
                <Text>{pageData.work.description}</Text>
              )}
            </S.SectionHeader>

            {pageData.work.showcase && <Showcase {...pageData.work.showcase} />}
          </Container>
        </S.Section>
      )}

      {pageData.caseStudies && (
        <S.Section id="cases">
          <Container>
            <S.SectionHeader>
              {pageData.caseStudies.heading && (
                <S.SectionHeading level="h2">
                  {pageData.caseStudies.heading}
                </S.SectionHeading>
              )}

              {pageData.caseStudies.description && (
                <Text>{pageData.caseStudies.description}</Text>
              )}
            </S.SectionHeader>

            {pageData.caseStudies.cases && (
              <Cases {...pageData.caseStudies.cases} />
            )}
          </Container>
        </S.Section>
      )}

      {pageData.experience && (
        <S.Section id="experience">
          <Container>
            <S.SectionHeader>
              {pageData.experience.heading && (
                <S.SectionHeading level="h2">
                  {pageData.experience.heading}
                </S.SectionHeading>
              )}

              {pageData.experience.description && (
                <Text>{pageData.experience.description}</Text>
              )}
            </S.SectionHeader>

            {pageData.experience.timeline && (
              <Timeline {...pageData.experience.timeline} />
            )}
          </Container>
        </S.Section>
      )}

      <S.Section id="contact">
        <Contact />
      </S.Section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const baseShowcaseUrl = "/media/showcase"

  const publicPath = path.join(process.cwd(), "public")
  const baseShowcasePath = `${publicPath}/media/showcase/`

  const { work: workData } = rawData

  /**
   * Generate additional data required on the client-side at render time
   */
  const generateLinksData = (item: ShowcaseItemRaw): Route[] => {
    if (!item.links?.length) return []

    return item.links.map((link) => {
      if (!link.url) return link

      return {
        ...link,
        type: getLinkType(link.url),
      }
    })
  }

  /**
   * Generate additional data required by Next to serve static assets
   */
  const generateImageData = (
    item: ShowcaseItemRaw,
    isThumb: boolean
  ): ImageProps => {
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
    links: generateLinksData(item),
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

export default HomePage

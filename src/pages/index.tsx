import fs from "fs"
import path from "path"
import sizeOf from "image-size"
import { ImageProps } from "next/image"
import { NextSeo } from "next-seo"

// Types
import { NextPage, GetStaticProps } from "next"
import { Route } from "@ts/routes"
import { ShowcaseItem } from "@components/showcase/types"

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
import { routes } from "@constants/routes"
import ExternalLink from "@components/generic/ExternalLink"

type PageData = Omit<typeof rawData, "work"> & {
  work: Omit<typeof rawData.work, "showcase"> & {
    showcase: { items: ShowcaseItem[] }
  }
}

export interface Props {
  pageData: PageData
}

// Setup
const META_TITLE = "Homepage"
const META_DESCRIPTION =
  "Creative Fullstack Developer, Concept Artist & Illustrator"

const HomePage: NextPage<Props> = ({ pageData }) => {
  return (
    <>
      <NextSeo title={META_TITLE} description={META_DESCRIPTION} />

      <S.Section id="about">
        <Container>
          <S.Hero>
            <S.HeroImageWrapper>
              <S.HeroBackdrop>
                <S.HeroImage {...pageData.about.hero.img} priority />
              </S.HeroBackdrop>
            </S.HeroImageWrapper>

            <S.HeroHeading level="h1">
              {pageData.about.hero.title}
            </S.HeroHeading>
            <Text>{pageData.about.hero.text}</Text>
          </S.Hero>

          <Card {...pageData.about.card} />
        </Container>
      </S.Section>

      <S.Section id="work">
        <Container>
          <S.SectionHeader>
            <S.SectionHeading level="h2">
              {pageData.work.heading}
            </S.SectionHeading>
            <Text>{pageData.work.description}</Text>
          </S.SectionHeader>

          <Showcase {...pageData.work.showcase} />
        </Container>
      </S.Section>

      <S.Section id="cases">
        <Container>
          <S.SectionHeader>
            <S.SectionHeading level="h2">
              {pageData.caseStudies.heading}
            </S.SectionHeading>
            <Text>{pageData.caseStudies.description}</Text>
          </S.SectionHeader>

          <Cases {...pageData.caseStudies.cases} />
        </Container>
      </S.Section>

      <S.Section id="experience">
        <Container>
          <S.SectionHeader>
            <S.SectionHeading level="h2">
              {pageData.experience.heading}
            </S.SectionHeading>
            <Text>
              <span>{pageData.experience.description}</span>
              <span>
                {" "}
                (looking for my{" "}
                <ExternalLink href={routes.resume.href}>résumé</ExternalLink>
                ?)
              </span>
            </Text>
          </S.SectionHeader>

          <Timeline {...pageData.experience.timeline} />
        </Container>
      </S.Section>

      <S.Section id="contact">
        <Contact />
      </S.Section>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
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
      if (!link.href) return link

      return {
        ...link,
        type: getLinkType(link.href),
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
    const imagePath = `${baseShowcasePath}/${suffix}`

    const data = fs.readFileSync(imagePath)
    const { width, height } = sizeOf(data)

    return {
      src,
      width,
      height,
      alt: item.alt,
    }
  }

  const parsedWorkItems: ShowcaseItem[] = workData.showcase.items.map(
    (item) => ({
      ...item,
      links: generateLinksData(item),
      thumb: generateImageData(item, true),
      image: generateImageData(item, false),
    })
  )

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

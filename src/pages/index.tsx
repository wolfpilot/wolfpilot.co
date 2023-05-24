import Image from "next/image"
import styled from "styled-components"

// Data
import { data } from "@data/homepage"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"

// Components
import Container from "@components/layout/Container"
import HeadingComponent from "@components/generic/Heading"
import Text from "@components/generic/Text"
import Card from "@components/generic/Card"

const HomePage = () => {
  if (!data) return null

  return (
    <>
      {data.about && (
        <Section>
          <Container>
            {data.about.hero && (
              <Hero>
                {data.about.hero.img && (
                  <HeroImageWrapper>
                    <HeroBackdrop>
                      <HeroImage {...data.about.hero.img} />
                    </HeroBackdrop>
                  </HeroImageWrapper>
                )}

                {data.about.hero.title && (
                  <HeroHeading level="h1">{data.about.hero.title}</HeroHeading>
                )}
                {data.about.hero.text && <Text>{data.about.hero.text}</Text>}
              </Hero>
            )}

            {data.about.card && <Card {...data.about.card} />}
          </Container>
        </Section>
      )}
    </>
  )
}

const Section = styled.section`
  margin-bottom: var(--spacing-section);
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
  width: calc(2 * var(--base-column-size));
  height: calc(2 * var(--base-column-size));
  margin: 0 auto;
  background: var(--g-accent-diagonal);
  border-radius: 50%;

  ${mq.from.S`
    width: calc(1.5 * var(--base-column-size));
    height: calc(1.5 * var(--base-column-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--base-column-size));
    height: calc(2 * var(--base-column-size));
  `}

  ${mq.from.L`
    width: calc(2 * var(--base-column-size) + 3 * var(--base-gutter));
    height: calc(2 * var(--base-column-size) + 3 * var(--base-gutter));
  `}
`

const HeroImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(2 * var(--base-column-size) - 2 * var(--base-gutter));
  height: auto;
  mix-blend-mode: darken;
  transform: translate(-50%, -45%);

  ${mq.from.S`
    width: calc(1.5 * var(--base-column-size) - 1.5 * var(--base-gutter));
  `}

  ${mq.from.M`
    width: calc(2 * var(--base-column-size) - 2 * var(--base-gutter));
  `}

  ${mq.from.L`
    width: calc(2 * var(--base-column-size) + 2 * var(--base-gutter));
  `}
`

const HeroHeading = styled(HeadingComponent)`
  ${textStyles.headingM};
`

export default HomePage

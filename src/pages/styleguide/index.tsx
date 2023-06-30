import { NextPage } from "next"
import Image from "next/image"
import { NextSeo } from "next-seo"

// Assets
import LogoSVG from "public/media/svg/logo.svg"

// Styles
import * as S from "@styles/pages/styleguide"
import { colors } from "@styles/colors"

// Components
import Container from "@components/layout/Container/Container"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

// Setup
const META_TITLE = "Styleguide"
const META_DESCRIPTION =
  "A visual collection of branding, colors, typography and other design rules"

const StyleguidePage: NextPage = () => (
  <>
    <NextSeo title={META_TITLE} description={META_DESCRIPTION} />

    <Container>
      <S.Header>
        <Image
          src={LogoSVG}
          width={302}
          alt={"Logo of a hand-painted wolf with aviator goggles on"}
        />
        <S.Title>Styleguide</S.Title>
      </S.Header>

      <S.Section>
        <S.ContentHeading level="h2">Headings</S.ContentHeading>

        <Heading level="h1">Heading 1</Heading>
        <Heading level="h2">Heading 2</Heading>
        <Heading level="h3">Heading 3</Heading>
        <Heading level="h4">Heading 4</Heading>
        <Heading level="h5">Heading 5</Heading>
        <Heading level="h6">Heading 6</Heading>
      </S.Section>

      <S.Section>
        <S.ContentHeading level="h2">Copy</S.ContentHeading>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
          bibendum neque egestas. Sed vulputate mi sit amet mauris commodo quis.
          Ac tortor dignissim convallis aenean et tortor at risus. Montes
          nascetur ridiculus mus mauris vitae ultricies. Volutpat odio facilisis
          mauris sit amet. Donec ultrices tincidunt arcu non. Lacus viverra
          vitae congue eu consequat. Nisi lacus sed viverra tellus. Senectus et
          netus et malesuada fames.
          <br />
          <br />
          Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Egestas purus viverra accumsan in. Commodo viverra maecenas
          accumsan lacus vel facilisis volutpat. Vestibulum lectus mauris
          ultrices eros in. Arcu ac tortor dignissim convallis. At consectetur
          lorem donec massa sapien faucibus. Ullamcorper morbi tincidunt ornare
          massa eget egestas purus viverra accumsan.
          <br />
          <br />
          Sodales neque sodales ut etiam sit. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi tincidunt ornare. Nunc sed augue lacus
          viverra vitae congue eu consequat ac. Orci ac auctor augue mauris
          augue neque gravida in fermentum.
        </Text>
      </S.Section>

      <S.Section>
        <S.ContentHeading level="h2">Colors</S.ContentHeading>

        <S.ColorList>
          {Object.entries(colors).map(([key, val], index) => (
            <S.ColorBlock key={index} hex={val}>
              {key && <Heading level="h3">{key}</Heading>}
              {val && <Text>{val}</Text>}
            </S.ColorBlock>
          ))}
        </S.ColorList>
      </S.Section>
    </Container>
  </>
)

export default StyleguidePage

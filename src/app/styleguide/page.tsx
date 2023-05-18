"use client"

import Image from "next/image"
import styled from "styled-components"

// Assets
import LogoSVG from "public/images/svg/logo.svg"

// Styles
import { colors } from "@/styles/colors"

// Components
import Container from "@/components/layout/Container"
import Heading from "@/components/generic/Heading"
import Text from "@/components/generic/Text"

const StyleguidePage: React.FC = () => {
  return (
    <Main>
      <Container>
        <Header>
          <Image
            src={LogoSVG}
            width={302}
            alt={"Logo of a hand-painted wolf with aviator goggles on"}
          />
          <Title>Styleguide</Title>
        </Header>

        <Content>
          <ContentHeading level="h2">Headings</ContentHeading>

          <Heading level="h1">Heading 1</Heading>
          <Heading level="h2">Heading 2</Heading>
          <Heading level="h3">Heading 3</Heading>
          <Heading level="h4">Heading 4</Heading>
          <Heading level="h5">Heading 5</Heading>
          <Heading level="h6">Heading 6</Heading>
        </Content>

        <Content>
          <ContentHeading level="h2">Copy</ContentHeading>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
            bibendum neque egestas. Sed vulputate mi sit amet mauris commodo
            quis. Ac tortor dignissim convallis aenean et tortor at risus.
            Montes nascetur ridiculus mus mauris vitae ultricies. Volutpat odio
            facilisis mauris sit amet. Donec ultrices tincidunt arcu non. Lacus
            viverra vitae congue eu consequat. Nisi lacus sed viverra tellus.
            Senectus et netus et malesuada fames.
            <br />
            <br />
            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
            ultrices. Egestas purus viverra accumsan in. Commodo viverra
            maecenas accumsan lacus vel facilisis volutpat. Vestibulum lectus
            mauris ultrices eros in. Arcu ac tortor dignissim convallis. At
            consectetur lorem donec massa sapien faucibus. Ullamcorper morbi
            tincidunt ornare massa eget egestas purus viverra accumsan.
            <br />
            <br />
            Sodales neque sodales ut etiam sit. Vestibulum mattis ullamcorper
            velit sed ullamcorper morbi tincidunt ornare. Nunc sed augue lacus
            viverra vitae congue eu consequat ac. Orci ac auctor augue mauris
            augue neque gravida in fermentum.
          </Text>
        </Content>

        <Content>
          <ContentHeading level="h2">Colors</ContentHeading>

          <ColorList>
            {Object.entries(colors).map(([key, val], index) => (
              <ColorBlock key={index} hex={val}>
                {key && <Heading level="h5">{key}</Heading>}
                {val && <Text>{val}</Text>}
              </ColorBlock>
            ))}
          </ColorList>
        </Content>
      </Container>
    </Main>
  )
}

const Main = styled.div`
  padding: var(--base-gutter);
`
Main.displayName = "Main"

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  margin-bottom: var(--base-gutter);
  border-radius: var(--border-radius-sml);
  background-color: var(--c-neutral4);
  color: var(--c-black);
`
Header.displayName = "Header"

const Title = styled.div`
  font-size: 72px;
`
Title.displayName = "Title"

const Content = styled.div`
  &:not(:last-of-type) {
    margin-bottom: var(--base-gutter);
    padding-bottom: calc(2 * var(--base-gutter));
  }
`
Content.displayName = "Content"

const ContentHeading = styled(Heading)`
  text-transform: uppercase;
  letter-spacing: 0.5em;
  border-bottom: 1px solid var(--c-neutral3);
`
ContentHeading.displayName = "ContentHeading"

const ColorList = styled.div``
ColorList.displayName = "ColorList"

const ColorBlock = styled.div<{ hex: string }>`
  margin: var(--base-gutter) 0;
  padding: var(--base-gutter);
  border-radius: var(--border-radius-sml);
  background-color: ${({ hex }) => hex};
  ${({ hex }) => hex === colors.black && `color: ${colors.white}`};
`
ColorBlock.displayName = "ColorBlock"

export default StyleguidePage

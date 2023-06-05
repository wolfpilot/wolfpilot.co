import styled from "styled-components"

// Types
import { Meta } from "@data/cases"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export interface Props {
  children: React.ReactNode
  meta: Meta
}

const CaseLayout: React.FC<Props> = ({ children, meta }) => {
  if (!meta?.title || !meta?.tagline) {
    return null
  }

  return (
    <Wrapper>
      <Header>
        <Heading level="h1">{meta.title}</Heading>
        <Text>{meta.tagline}</Text>
      </Header>

      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.article``

const Header = styled.header``

const Content = styled.div``

export default CaseLayout

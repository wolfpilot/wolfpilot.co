// Constants
import { social } from "@constants/social"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export interface Props {}

const Contact: React.FC<Props> = () => (
  <S.Wrapper>
    <Container>
      <Heading level="h3">Get in touch</Heading>
      <Text>
        Interested in working together or just want to grab a beer sometime?
        Give me a shout.
      </Text>

      <Text>
        <S.EmailLink
          href={social.email.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          howl@wolfpilot.co
        </S.EmailLink>
      </Text>

      <Text>
        or find me on{" "}
        <a href={social.github.url} target="_blank" rel="noopener noreferrer">
          github
        </a>{" "}
        /{" "}
        <a href={social.codepen.url} target="_blank" rel="noopener noreferrer">
          codepen
        </a>{" "}
        /{" "}
        <a
          href={social.deviantart.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          deviantart
        </a>{" "}
        /{" "}
        <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </Text>
    </Container>
  </S.Wrapper>
)

export default Contact

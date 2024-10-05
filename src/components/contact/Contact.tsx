// Constants
import { social } from "@constants/social"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import ExternalLink from "@components/generic/ExternalLink"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

const Contact: React.FC = () => (
  <S.Wrapper>
    <Container>
      <Heading level="h3">Get in touch</Heading>
      <Text>
        Interested in working together or just want to grab a beer sometime?
        Give me a shout.
      </Text>

      <Text>
        <S.EmailLink href={social.email.href}>howl@wolfpilot.co</S.EmailLink>
      </Text>

      <Text>
        or find me on{" "}
        <ExternalLink href={social.github.href}>github</ExternalLink> /{" "}
        <ExternalLink href={social.codepen.href}>codepen</ExternalLink> /{" "}
        <ExternalLink href={social.deviantart.href}>deviantart</ExternalLink> /{" "}
        <ExternalLink href={social.linkedin.href}>linkedin</ExternalLink>
      </Text>
    </Container>
  </S.Wrapper>
)

export default Contact

import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import SocialLinksComponent from "@components/generic/SocialLinks"

export const Wrapper = styled.footer`
  padding: var(--spacing-default) 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.from.M`
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  `}
`

export const SocialLinks = styled(SocialLinksComponent)`
  margin-bottom: var(--spacing-default);

  ${mq.from.M`
    margin-bottom:0;
  `}
`

export const Copyright = styled.div`
  text-align: center;

  ${mq.from.M`
    text-align: left;
  `}
`

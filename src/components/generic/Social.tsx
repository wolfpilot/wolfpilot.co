import Link from "next/link"
import styled from "styled-components"

// Constants
import { social } from "@constants/social"

// Styles
import { textStylesLrg } from "@styles/typography"

// Components
import Icon from "@components/icons/Icon"

const Social: React.FC = () => (
  <Wrapper>
    <SocialDescription>find me on</SocialDescription>

    <SocialList>
      {Object.keys(social).map((key) => {
        const { label, url } = social[key]

        if (!label || !url) return null

        return (
          <SocialItem key={label}>
            <SocialItemLink
              href={url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialItemLinkIcon type={label.toLowerCase()} />
            </SocialItemLink>
          </SocialItem>
        )
      })}
    </SocialList>
  </Wrapper>
)

const Wrapper = styled.div``

const SocialDescription = styled.div`
  ${textStylesLrg.base};
  margin-bottom: var(--base-spacing);
  color: var(--c-white);
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: calc(var(--base-spacing) / 2);
  }
`

const SocialItemLink = styled(Link)`
  display: block;
  padding: calc(var(--base-spacing) / 2);
  line-height: 0;
`

const SocialItemLinkIcon = styled(Icon)`
  stroke: var(--c-white);
`

export default Social

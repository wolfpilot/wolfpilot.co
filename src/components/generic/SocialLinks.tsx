import styled from "styled-components"

// Constants
import { social } from "@constants/social"

// Styles
import { listResetStyles } from "@styles/list"
import { duration, ease } from "@styles/animation"

// Components
import ExternalLink from "./ExternalLink"
import Icon from "@components/icons/Icon"

export type Option = "light" | "dark"

export interface Props {
  className?: string
  option: Option
}

const Social: React.FC<Props> = ({ className, option }) => (
  <Wrapper className={className}>
    <SocialList>
      {Object.keys(social).map((key) => {
        const { label, url } = social[key]

        if (!label || !url) return null

        return (
          <SocialItem key={label}>
            <SocialItemLink option={option} href={url} aria-label={label}>
              <SocialItemLinkIcon type={label.toLowerCase()} option={option} />
            </SocialItemLink>
          </SocialItem>
        )
      })}
    </SocialList>
  </Wrapper>
)

const Wrapper = styled.div``

const SocialList = styled.ul`
  ${listResetStyles};
  display: flex;
  justify-content: center;
`

const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: calc(var(--spacing-default) / 2);
  }
`

const SocialItemLinkIcon = styled(Icon)<{ option: Option }>`
  stroke: ${({ option }) =>
    option === "light" ? "var(--c-white)" : "var(--c-black)"};
  transition: stroke ${duration.medium}s ${ease.cubic};
`

const SocialItemLink = styled(ExternalLink)<{ option: Option }>`
  display: block;
  padding: calc(var(--spacing-default) / 2);
  line-height: 0;

  &:hover {
    ${SocialItemLinkIcon} {
      stroke: ${({ option }) =>
        option === "light" ? "var(--c-black)" : "var(--c-accent1)"};
    }
  }
`

export default Social

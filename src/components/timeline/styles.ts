import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { btnResetStyles } from "@styles/button"
import { textStyles } from "@styles/textStyles"

export const Wrapper = styled.div`
  display: flex;
`

export const NavList = styled.ul`
  ${listResetStyles};

  ${mq.from.L`
    width: calc(5 * var(--grid-column-size) + 6 * var(--grid-gutter-size));
    padding-right: var(--grid-gutter-size);
  `}
`

export const NavItem = styled.li`
  display: flex;
  align-items: baseline;

  &:not(:last-child) {
    margin-bottom: var(--spacing-default);
  }
`

export const NavItemIndicator = styled.div`
  margin-right: var(--grid-gutter-size);

  ${mq.from.M`
    width: var(--grid-column-size);
  `}
`

export const NavItemBullet = styled.div`
  ${textStyles.copyL};
  color: var(--c-accent1);
`

export const NavItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const NavItemBtn = styled.button`
  ${btnResetStyles};
  ${textStyles.copyL};
  text-align: left;
`

export const NavItemLink = styled.a`
  color: var(--c-accent2);
`

import styled, { css } from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { btnResetStyles } from "@styles/button"
import { textStyles } from "@styles/textStyles"
import { duration, ease } from "@styles/animation"

// Components
import InternalLink from "@components/generic/InternalLink"
import Heading from "@components/generic/Heading"

export const Wrapper = styled.div``

export const List = styled.ul`
  ${listResetStyles};
`

export const Item = styled(motion.li)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--c-neutral3);
  }
`

export const ItemNumber = styled.div`
  width: 20px;
  margin-right: 10px;

  @media (hover: hover) and (pointer: fine) {
    visibility: hidden;
    opacity: 0;
    transform: translateX(10px);
    transition:
      visibility ${duration.medium}s ${ease.cubic},
      opacity ${duration.medium}s ${ease.cubic},
      transform ${duration.medium}s ${ease.cubic};
  }
`

export const ItemTitle = styled(Heading)<{ isToggle?: boolean }>`
  ${({ isToggle }) => (isToggle ? textStyles.headingS : textStyles.headingM)};
  margin-bottom: 0;

  ${mq.from.S`
    padding-right: var(--grid-gutter-size);
  `}

  @media (hover: hover) and (pointer: fine) {
    transform: translateX(-35px);
    transition: transform ${duration.medium}s ${ease.cubic} ${duration.fast}s;
  }
`

export const ItemCategory = styled.div`
  display: none;

  ${mq.from.S`
    display: block;
    flex: 1 0 var(--grid-column-size);
    margin-left: auto;
    text-align: right;
    text-transform: capitalize;
  `}

  ${mq.from.L`
    flex-basis: calc(2 *  var(--grid-column-size) + var(--grid-gutter-size));
  `}
`

const sharedCtaStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: var(--spacing-default);
  padding-bottom: var(--spacing-default);
  color: var(--c-neutral2);
  filter: hue-rotate(-270deg);
  transition:
    color ${duration.slow}s ${ease.cubic},
    filter ${duration.slow}s ${ease.cubic};

  &:hover,
  &:focus {
    outline: none;
    color: var(--c-accent2);
    filter: hue-rotate(0deg);

    ${ItemNumber} {
      @media (hover: hover) and (pointer: fine) {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        transition:
          visibility ${duration.medium}s ${ease.cubic} ${duration.fast}s,
          opacity ${duration.medium}s ${ease.cubic} ${duration.fast}s,
          transform ${duration.medium}s ${ease.cubic} ${duration.fast}s;
      }
    }

    ${ItemTitle} {
      @media (hover: hover) and (pointer: fine) {
        transform: translateX(0);
        transition: transform ${duration.slow}s ${ease.cubic};
      }
    }
  }
`

export const ItemLink = styled(InternalLink)`
  ${sharedCtaStyles};
`

export const ItemBtn = styled.button`
  ${btnResetStyles};
  ${sharedCtaStyles};
`

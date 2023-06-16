import styled from "styled-components"

// Styles
import { fixBorderRadiusOverflow } from "@styles/vendor/safari"
import { mq } from "@styles/utils/mediaQueries"
import { btnResetStyles } from "@styles/button"
import { textStyles } from "@styles/textStyles"
import { zIndexes } from "@styles/zIndexes"
import { duration, ease } from "@styles/animation"

// Components
import Icon from "@components/icons/Icon"

/**
 * Create a "scrollable" track for the button to move through
 * starting 1.5 screens height from the top
 * ending 0.5 screens height from the bottom
 */
export const Wrapper = styled.div`
  display: none;

  // prettier-ignore
  @media (hover: hover)
    and (pointer: fine)
    and (min-width: ${mq.breakpoints.L}px) {
        position: absolute;
        z-index: ${zIndexes.scrollToTop};
        display: block;
        top: 150vh;
        bottom: 50vh;
        right: 0;
        pointer-events: none;
    }
`

export const BtnContent = styled.div`
  ${fixBorderRadiusOverflow};
  display: flex;
  align-items: center;
  width: 40px;
  padding-top: var(--spacing-default);
  padding-bottom: var(--spacing-default);
  border-top-left-radius: var(--border-radius-lrg);
  border-bottom-left-radius: var(--border-radius-lrg);
  background-color: var(--c-black);
  color: var(--c-white);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: translateX(calc(100% - 10px));
  transition: transform ${duration.medium}s ${ease.cubic};
`

export const ArrowIcon = styled(Icon)`
  margin-bottom: 5px;
  transform: rotate(-90deg);
`

export const Text = styled.div`
  ${textStyles.copy};
  line-height: 1;
  transform: scale(-1);
`

/**
 * The button itself is always centred vertically
 */
export const Btn = styled.button`
  ${btnResetStyles};
  position: sticky;
  top: 50vh;
  // Allow users a little more room to click on
  padding: 10px 0 10px 10px;
  transform: translateY(-50%);
  pointer-events: all;

  &:hover {
    ${BtnContent} {
      transform: translateX(0);
    }
  }
`

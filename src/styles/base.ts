import { css } from "styled-components"

// Constants
import { DISABLE_SCROLL_CLASSNAME } from "@constants/dom"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import {
  MAX_CONTENT_WIDTH,
  BORDER_RADIUS_SML,
  BORDER_RADIUS_LRG,
  columns,
  gutter,
  spacing,
} from "@styles/layout"
import { colors } from "@styles/colors"
import { fonts, textStyles, weights } from "@styles/typography"
import { sizes } from "@styles/sizes"

export const base = css`
  @font-face {
    font-family: "Chillax";
    font-weight: ${weights.normal};
    font-display: block;
    src: url("/fonts/chillax-regular.woff2") format("woff2"),
      url("/fonts/chillax-regular.woff") format("woff");
  }

  :root {
    // Layout
    --max-content-width: ${MAX_CONTENT_WIDTH};
    --border-radius-sml: ${BORDER_RADIUS_SML};
    --border-radius-lrg: ${BORDER_RADIUS_LRG};
    --site-header-height: ${sizes.siteHeaderSize.mob};

    /**
     * @NOTE: IE 11 doesn't support vars, so just use the equivalent vw values
     * 1 col in a 3 col grid = 33.33vw
     * 1 col in a 6 col grid = 16.66vw
     * 1 col in a 12 col grid = 8.33vw
     */
    /* Set the default nr. of columns, gutter, etc. */
    --base-columns: ${columns.XS};
    --base-gutter: ${gutter.XS};
    --base-spacing: ${spacing.default};
    --base-spacing-section: ${spacing.section};

    /**
      * To calculate the column size:
      * - Take the total width of the screen
      * - Subtract the gaps
      * - Divide the result by the number of columns
      */
    --base-column-size: calc(
      (100vw - ((var(--base-columns) + 1) * var(--base-gutter))) /
        var(--base-columns)
    );

    ${mq.from.S`
      --base-columns: ${columns.S};
      --base-gutter: ${gutter.S};
    `}

    ${mq.from.M`
      --site-header-height: ${sizes.siteHeaderSize.desk};
      --base-columns: ${columns.M};
      --base-gutter: ${gutter.M};
    `}

    ${mq.from.L`
      --base-columns: ${columns.L};
      --base-gutter: ${gutter.L};
    `}

    ${mq.from.XL`
      --base-columns: ${columns.XL};
      --base-gutter: ${gutter.XL};
      --base-column-size: calc(
        (${MAX_CONTENT_WIDTH} - ((var(--base-columns) + 1) * var(--base-gutter))) /
          var(--base-columns));
    `}
      
    // Typography
    --font-primary: ${fonts.primary};

    // Colors
    --c-black: ${colors.black};
    --c-white: ${colors.white};
    --c-neutral1: ${colors.neutral1};
    --c-neutral2: ${colors.neutral2};
    --c-neutral3: ${colors.neutral3};
    --c-neutral4: ${colors.neutral4};
    --c-neutral5: ${colors.neutral5};
    --c-pageColor: ${colors.pageColor};
    --c-accent1: ${colors.accent1};
    --c-accent2: ${colors.accent2};
    --c-textHighlight: ${colors.textHighlight};
    --c-gridBgColor: ${colors.gridBgColor};
    --c-gridColumnBgColor: ${colors.gridColumnBgColor};
    --c-gridTextColor: ${colors.gridTextColor};
  }

  /* Custom text highlighting */
  ::selection {
    background-color: var(--c-textHighlight);
    color: var(--c-black);
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    ${textStyles.base};
    font-family: var(--font-primary);
    color: var(--c-black);
    background: var(--c-pageColor);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  q,
  caption {
    margin-top: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  picture {
    line-height: 0;
  }

  img {
    max-width: 100%;
    margin-bottom: 0;
  }

  .${DISABLE_SCROLL_CLASSNAME} {
    overflow: hidden;
  }
`

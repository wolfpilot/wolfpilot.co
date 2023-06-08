import { css } from "styled-components"

/**
 * Fix rounded corners overflow not working in Safari
 *
 * For more info, see:
 * https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
 */
export const fixBorderRadiusOverflow = css`
  mask-image: -webkit-radial-gradient(white, black);
`

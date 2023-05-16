// Global stylesheet
import { createGlobalStyle } from "styled-components"

// Styling
import { reset } from "./reset"
import { base } from "./base"

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${base};
`

export default GlobalStyle

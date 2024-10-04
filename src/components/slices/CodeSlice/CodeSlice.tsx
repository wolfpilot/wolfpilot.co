import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter"
import { ocean } from "react-syntax-highlighter/dist/cjs/styles/hljs"

/**
 * Fix type error due to somewhat unmaintained package.
 *
 * @see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/539#issuecomment-1869182939
 */
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>

// Styles
import * as S from "./styles"

export interface Props {
  language: string
  code: string
}

const CodeSlice: React.FC<Props> = ({ language, code }) => {
  if (!language || !code) return null

  return (
    <S.Wrapper>
      <SyntaxHighlighter language={language} style={ocean} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </S.Wrapper>
  )
}

export default CodeSlice

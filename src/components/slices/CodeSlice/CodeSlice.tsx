import SyntaxHighlighter from "react-syntax-highlighter"
import { ocean } from "react-syntax-highlighter/dist/cjs/styles/hljs"

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

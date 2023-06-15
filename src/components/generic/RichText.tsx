import React from "react"
import { sanitize } from "isomorphic-dompurify"
import styled from "styled-components"

interface IProps {
  className?: string
  html: string
}

const RichText: React.FC<IProps> = ({ className, html }) => (
  <Wrapper
    className={className}
    dangerouslySetInnerHTML={{
      __html: sanitize(html, { ADD_ATTR: ["target"] }),
    }}
  />
)

const Wrapper = styled.div`
  p {
    white-space: pre-line;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default RichText

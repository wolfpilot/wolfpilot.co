import React from "react"
import styled from "styled-components"

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Text: React.FC<IProps> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

const Wrapper = styled.div`
  white-space: pre-line;
`

export default Text

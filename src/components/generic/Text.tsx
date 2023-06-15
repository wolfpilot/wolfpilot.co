import React from "react"
import styled from "styled-components"

interface IProps {
  className?: string
  children: React.ReactNode
}

const Text: React.FC<IProps> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

const Wrapper = styled.p`
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Text

import React from "react"
import styled from "styled-components"

// Styles
import { textStyles } from "@styles/typography"

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Text: React.FC<IProps> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

const Wrapper = styled.div`
  ${textStyles.base};
`

export default Text

// any component file
import React from "react"
import { styled } from "styled-components"

export interface Props {
  bgColor: string
  label: string
}

const Button: React.FC<Props> = ({ label, ...props }) => (
  <Wrapper {...props}>{label}</Wrapper>
)

const Wrapper = styled.button<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #000;
  color: #fff;
`

export default Button

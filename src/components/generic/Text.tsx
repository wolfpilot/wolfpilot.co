import React from "react"
import styled from "styled-components"

// Styles
import { mq } from "@/styles/utils/mediaQueries"
import { textStyles } from "@/styles/typography"

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Text: React.FC<IProps> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

/* ${mq.from.M`
    ${textStyles.M};
  `}

  ${mq.from.L`
    ${textStyles.L};
  `}

  ${mq.from.XXL`
    ${textStyles.XL};
  `} */

const Wrapper = styled.div`
  ${textStyles.body};
`

export default Text

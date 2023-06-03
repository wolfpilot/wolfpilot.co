import styled from "styled-components"

// Styles
import { textStyles } from "@styles/textStyles"

export interface Props {
  children: React.ReactNode
  className?: string
}

const Tooltip: React.FC<Props> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

const Wrapper = styled.span`
  ${textStyles.copyS};
  padding: 10px;
  border-radius: var(--border-radius-sml);
  background-color: var(--c-black);
  color: var(--c-white);
`

export default Tooltip

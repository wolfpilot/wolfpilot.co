import { Icon } from "@ts/icons"

const Next: React.FC<Icon> = ({
  className,
  width = 48,
  height = 72,
  color = "#000000",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 48 72"
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4V68L44 36L4 4Z"
      strokeWidth="6"
      strokeLinejoin="round"
      strokeLinecap="round"
      pathLength="1"
    />
  </svg>
)

export default Next

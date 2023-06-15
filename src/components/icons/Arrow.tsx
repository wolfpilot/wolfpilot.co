import { Icon } from "@ts/icons"

const Arrow: React.FC<Icon> = ({
  className,
  width = 10,
  height = 24,
  color = "#000000",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 10 24"
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12L2.86197e-07 -1.19249e-07C2.86197e-07 -1.19249e-07 1.21145 6.81336 1.21145 12C1.21145 17.1866 0 24 0 24L10 12Z"
      fill="url(#arrow-gradient0)"
    />
    <defs>
      <linearGradient
        id="arrow-gradient0"
        x1="10"
        y1="12"
        x2="1.43099e-07"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF864C" />
        <stop offset="1" stopColor="#F95A48" />
      </linearGradient>
    </defs>
  </svg>
)

export default Arrow

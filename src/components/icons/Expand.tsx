import { Icon } from "@ts/icons"

const Expand: React.FC<Icon> = ({
  className,
  width = 24,
  height = 24,
  color = "#000000",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#svg-expand)">
      <path d="M9.00001 21.5625H2.4375V15C2.4375 14.4825 2.0175 14.0625 1.5 14.0625C0.9825 14.0625 0.5625 14.4825 0.5625 15V22.5C0.5625 23.0175 0.9825 23.4375 1.5 23.4375H9.00001C9.51751 23.4375 9.93751 23.0175 9.93751 22.5C9.93751 21.9825 9.51751 21.5625 9.00001 21.5625ZM22.5 14.0625C21.9825 14.0632 21.5633 14.4825 21.5625 15V21.5625H15C14.4825 21.5625 14.0625 21.9825 14.0625 22.5C14.0625 23.0175 14.4825 23.4375 15 23.4375H22.5C23.0175 23.4367 23.4368 23.0175 23.4375 22.5V15C23.4368 14.4825 23.0175 14.0632 22.5 14.0625ZM9.00001 0.5625H1.5C0.9825 0.5625 0.5625 0.9825 0.5625 1.5V9C0.5625 9.5175 0.9825 9.9375 1.5 9.9375C2.0175 9.9375 2.4375 9.5175 2.4375 9V2.4375H9.00001C9.51751 2.4375 9.93751 2.0175 9.93751 1.5C9.93751 0.9825 9.51751 0.5625 9.00001 0.5625ZM22.5 0.5625H15C14.4825 0.5625 14.0625 0.9825 14.0625 1.5C14.0625 2.0175 14.4825 2.4375 15 2.4375H21.5625V9C21.5625 9.5175 21.9825 9.9375 22.5 9.9375C23.0175 9.9375 23.4375 9.5175 23.4375 9V1.5C23.4375 0.9825 23.0175 0.5625 22.5 0.5625Z" />
    </g>
    <defs>
      <clipPath id="svg-expand">
        <rect width="24" height="24" fill={color} />
      </clipPath>
    </defs>
  </svg>
)

export default Expand

import { Icon } from "@ts/icons"

const Close: React.FC<Icon> = ({
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
    <path d="M24.0159 21.425L14.5764 12L24.0159 2.57498C24.2892 2.29251 24.4404 1.91419 24.437 1.52149C24.4335 1.1288 24.2758 0.75316 23.9977 0.475474C23.7196 0.197789 23.3433 0.0402767 22.95 0.0368643C22.5568 0.0334519 22.1778 0.184412 21.8949 0.45723L12.4554 9.88225L3.01595 0.45723C2.87757 0.314185 2.71206 0.200086 2.52905 0.121594C2.34604 0.0431006 2.14921 0.00178462 1.95004 5.65487e-05C1.75088 -0.00167152 1.55336 0.0362225 1.36901 0.111528C1.18467 0.186834 1.01719 0.298043 0.876352 0.438666C0.735514 0.579289 0.624132 0.74651 0.54871 0.930572C0.473289 1.11463 0.435337 1.31185 0.437067 1.51071C0.438799 1.70958 0.480179 1.90611 0.558792 2.08883C0.637405 2.27156 0.751677 2.43682 0.894943 2.57498L10.3344 12L0.894943 21.425C0.751677 21.5632 0.637405 21.7284 0.558792 21.9112C0.480179 22.0939 0.438799 22.2904 0.437067 22.4893C0.435337 22.6882 0.473289 22.8854 0.54871 23.0694C0.624132 23.2535 0.735514 23.4207 0.876352 23.5613C1.01719 23.702 1.18467 23.8132 1.36901 23.8885C1.55336 23.9638 1.75088 24.0017 1.95004 23.9999C2.14921 23.9982 2.34604 23.9569 2.52905 23.8784C2.71206 23.7999 2.87757 23.6858 3.01595 23.5428L12.4554 14.1177L21.8949 23.5428C22.1778 23.8156 22.5568 23.9665 22.95 23.9631C23.3433 23.9597 23.7196 23.8022 23.9977 23.5245C24.2758 23.2468 24.4335 22.8712 24.437 22.4785C24.4404 22.0858 24.2892 21.7075 24.0159 21.425Z" />
  </svg>
)

export default Close

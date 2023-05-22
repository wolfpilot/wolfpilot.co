import { Icon } from "@ts/icons"

const Codepen: React.FC<Icon> = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="#151515"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 2.3335L25.6666 9.91683V18.0835L14 25.6668L2.33331 18.0835V9.91683L14 2.3335Z" />
    <path d="M14 25.6668V18.0835" />
    <path d="M25.6666 9.9165L14 18.0832L2.33331 9.9165" />
    <path d="M2.33331 18.0832L14 9.9165L25.6666 18.0832" />
    <path d="M14 2.3335V9.91683" />
  </svg>
)

export default Codepen

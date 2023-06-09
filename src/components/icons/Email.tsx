import { Icon } from "@ts/icons"

const Email: React.FC<Icon> = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26 5.3335V22.6668H2V5.3335H26Z" />
    <path d="M26 22.6665L20 16.6665" />
    <path d="M2 22.6665L8 16.6665" />
    <path d="M2 5.3335L14.1791 17.3335L26 5.3335" />
  </svg>
)

export default Email

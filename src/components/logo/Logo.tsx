import React from "react"

export interface Props {
  className?: string
  id: string
}

const Logo: React.FC<Props> = ({ className, id }) => (
  <svg
    className={className}
    width="604"
    height="264"
    viewBox="0 0 604 264"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath={`url(#clip0_160_4948-${id})`}>
      {/* Top */}
      <path
        d="M302 47C235.178 47 0 264 0 264C0 264 230.703 224.158 302 224.158C373.297 224.158 604 264 604 264C604 264 368.822 47 302 47Z"
        fill={`url(#paint0_radial_160_4948-${id})`}
      />
      {/* Base */}
      <path
        d="M302 0L0 264C0 264 238 47 302 47C366 47 604 264 604 264L302 0Z"
        fill={`url(#paint1_linear_160_4948-${id})`}
      />
      {/* Shading */}
      <g>
        <path
          d="M302.361 188C229.413 188 0 264 0 264C0 264 237.518 205 302.361 205C367.204 205 604 264 604 264C604 264 375.309 188 302.361 188Z"
          fill={`url(#paint2_radial_160_4948-${id})`}
        />
        <path
          d="M302.361 151C229.413 151 0 264 0 264C0 264 237.518 160 302.361 160C367.204 160 604 264 604 264C604 264 375.309 151 302.361 151Z"
          fill={`url(#paint3_radial_160_4948-${id})`}
        />
        <path
          d="M302.361 115C229.413 115 0 264 0 264C0 264 237.518 127.5 302.361 127.5C367.204 127.5 604 264 604 264C604 264 375.309 115 302.361 115Z"
          fill={`url(#paint4_radial_160_4948-${id})`}
        />
        <path
          d="M302.361 82C229.413 82 0 264 0 264C0 264 237.518 89 302.361 89C367.204 89 604 264 604 264C604 264 375.309 82 302.361 82Z"
          fill={`url(#paint5_radial_160_4948-${id})`}
        />
        <path
          d="M302.361 58C229.412 58 0 264 0 264C0 264 237.518 62 302.361 62C367.204 62 604 264 604 264C604 264 375.31 58 302.361 58Z"
          fill={`url(#paint6_radial_160_4948-${id})`}
        />
      </g>
      {/* Letter */}
      <path
        d="M449.552 125.75C449.552 125.75 418.733 169.342 401.413 169.342C384.092 169.342 325.778 75 302 75C278.222 75 219.909 169.342 202.587 169.342C185.266 169.342 154.448 125.75 154.448 125.75L104.861 166.833C104.861 166.833 179.938 263.5 199.197 263.5C218.456 263.5 287.816 165.625 302 165.625C316.184 165.625 385.544 263.5 404.803 263.5C424.062 263.5 499.139 166.833 499.139 166.833L449.552 125.75Z"
        fill="white"
      />
    </g>
    <defs>
      <radialGradient
        id={`paint0_radial_160_4948-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(302 45.6153) scale(302.277 838.922)"
      >
        <stop stopColor="#FF864C" />
        <stop offset="0.185924" stopColor="#FF864C" />
        <stop offset="0.417188" stopColor="#F8693E" />
        <stop offset="0.772926" stopColor="#EE5B41" />
        <stop offset="1" stopColor="#BF0420" />
      </radialGradient>
      <linearGradient
        id={`paint1_linear_160_4948-${id}`}
        x1="302"
        y1="-1.47913"
        x2="302"
        y2="264.354"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F0482F" />
        <stop offset="0.328" stopColor="#FF864C" />
        <stop offset="0.707" stopColor="#F0482F" />
        <stop offset="1" stopColor="#BF0420" />
      </linearGradient>
      <radialGradient
        id={`paint2_radial_160_4948-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(302 196.039) scale(302.277 261.071)"
      >
        <stop stopColor="#FC854D" />
        <stop offset="0.185924" stopColor="#F38556" />
        <stop offset="0.541667" stopColor="#F5803E" />
        <stop offset="0.772926" stopColor="#E9412B" />
        <stop offset="1" stopColor="#BF0420" />
      </radialGradient>
      <radialGradient
        id={`paint3_radial_160_4948-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(302 162.953) scale(302.277 388.172)"
      >
        <stop stopColor="#FC854D" />
        <stop offset="0.185924" stopColor="#F38556" />
        <stop offset="0.541667" stopColor="#F5803E" />
        <stop offset="0.772926" stopColor="#E9412B" />
        <stop offset="1" stopColor="#BF0420" />
      </radialGradient>
      <radialGradient
        id={`paint4_radial_160_4948-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(302 130.761) scale(302.277 511.837)"
      >
        <stop stopColor="#FC854D" />
        <stop offset="0.185924" stopColor="#F38556" />
        <stop offset="0.541667" stopColor="#F5803E" />
        <stop offset="0.772926" stopColor="#E9412B" />
        <stop offset="1" stopColor="#BF0420" />
      </radialGradient>
      <radialGradient
        id={`paint5_radial_160_4948-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(302 101.251) scale(302.277 625.197)"
      >
        <stop stopColor="#FC854D" />
        <stop offset="0.185924" stopColor="#F38556" />
        <stop offset="0.541667" stopColor="#F5803E" />
        <stop offset="0.772926" stopColor="#E9412B" />
        <stop offset="1" stopColor="#BF0420" />
      </radialGradient>
      <radialGradient
        id={`paint6_radial_160_4948-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(302 79.7898) scale(302.277 707.641)"
      >
        <stop stopColor="#FC854D" />
        <stop offset="0.185924" stopColor="#F38556" />
        <stop offset="0.541667" stopColor="#F5803E" />
        <stop offset="0.772926" stopColor="#E9412B" />
        <stop offset="1" stopColor="#BF0420" />
      </radialGradient>
      <clipPath id={`clip0_160_4948-${id}`}>
        <rect width="604" height="264" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default Logo

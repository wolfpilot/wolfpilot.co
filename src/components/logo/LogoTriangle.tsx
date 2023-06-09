import React from "react"

export interface Props {
  className?: string
}

const LogoLetter: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="604"
    height="264"
    viewBox="0 0 604 264"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      className={`${className}__contour`}
      clipPath="url(#logoTriangle__contour-clip)"
    >
      <path
        className={`${className}__contour-path ${className}__contour-path-top`}
        d="M302 0.664108L496.626 170.801C490.294 165.603 483.841 160.357 477.313 155.11C443.558 127.981 407.793 100.844 376.46 80.487C360.794 70.3087 346.226 61.8188 333.564 55.8717C320.918 49.9318 310.116 46.5 302 46.5C293.884 46.5 283.082 49.9318 270.436 55.8717C257.774 61.8188 243.206 70.3087 227.54 80.487C196.207 100.844 160.442 127.981 126.687 155.11C120.159 160.357 113.705 165.604 107.373 170.801L302 0.664108Z"
        stroke="#151515"
        pathLength="1"
      />
      <path
        className={`${className}__contour-path ${className}__contour-path-bottom`}
        d="M602.412 263.22C602.133 263.172 601.821 263.119 601.476 263.06C599.768 262.768 597.255 262.34 594.031 261.795C587.583 260.705 578.292 259.149 566.92 257.281C544.176 253.546 513.107 248.565 479.81 243.584C413.235 233.626 337.694 223.658 302 223.658C266.306 223.658 190.765 233.626 124.19 243.584C90.8928 248.565 59.8244 253.546 37.0804 257.281C25.7083 259.149 16.4172 260.705 9.96898 261.795C6.74487 262.34 4.23149 262.768 2.52407 263.06C2.17881 263.119 1.86651 263.172 1.58795 263.22C1.97177 262.868 2.44178 262.438 2.99481 261.932C4.73301 260.343 7.29131 258.013 10.5712 255.047C17.131 249.114 26.577 240.639 38.1212 230.469C61.21 210.128 92.6897 183.008 126.256 155.889C159.824 128.768 195.47 101.656 226.894 81.3261C242.606 71.1609 257.252 62.6979 270.048 56.778C282.858 50.8516 293.76 47.5 302 47.5C310.24 47.5 321.142 50.8516 333.952 56.778C346.748 62.6979 361.394 71.1609 377.106 81.3261C408.53 101.656 444.176 128.768 477.744 155.889C511.31 183.008 542.79 210.128 565.879 230.469C577.423 240.639 586.869 249.114 593.429 255.047C596.709 258.013 599.267 260.343 601.005 261.932C601.558 262.438 602.028 262.868 602.412 263.22Z"
        stroke="#151515"
        pathLength="1"
      />
    </g>
    <g
      className={`${className}__shading`}
      clipPath="url(#logoTriangle__shading-clip)"
    >
      <path
        className={`${className}__shading-path ${className}__shading-path-top`}
        d="M302 0L0 264C0 264 238 47 302 47C366 47 604 264 604 264L302 0Z"
        fill="url(#logoTriangle__shading-gradient0)"
      />
      <path
        className={`${className}__shading-path ${className}__shading-path-bottom`}
        d="M302 47C235.178 47 0 264 0 264C0 264 230.703 224.158 302 224.158C373.297 224.158 604 264 604 264C604 264 368.822 47 302 47Z"
        fill="url(#logoTriangle__shading-gradient1)"
      />
    </g>
    <defs>
      <radialGradient
        id="logoTriangle__shading-gradient1"
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
        id="logoTriangle__shading-gradient0"
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
      <clipPath id="logoTriangle__contour-clip">
        <rect width="604" height="264" fill="white" />
      </clipPath>
      <clipPath id="logoTriangle__shading-clip">
        <rect width="604" height="264" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default LogoLetter

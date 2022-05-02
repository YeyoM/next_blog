import classes from './logo.module.css'
import React from 'react'

export default function Logo () {
  return (
    <div className={classes.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="66.667"
        height="66.667"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
        viewBox="0 0 50 50"
      >
        <g
          fill="#000"
          stroke="none"
        >
          <path
            d="M60 250 l0 -220 103 0 c122 0 166
            11 212 51 56 50 80 160 54 254 -14 51
            -73 110 -124 124 -22 6 -86 11 -142 11
            l-103 0 0 -220z m241 189 c158 -53 158
            -330 1 -377 -22 -7 -80 -12 -131 -12
            l-91 0 0 200 0 200 94 0 c51 0 108 -5
            127 -11z"
            transform="translate(0.000000,50.000000)
            scale(0.100000,-0.100000)"
          />
          <path
            d="M140 250 l0 -160 56 0 c107 0 164 55
            164 160 0 105 -57 160 -164 160 l-56 0 0
            -160z m139 125 c80 -41 81 -209 2 -249
            -16 -9 -50 -16 -76 -16 l-45 0 0 140 0
            140 45 0 c26 0 59 -7 74 -15z"
            transform="translate(0.000000,50.000000)
            scale(0.100000,-0.100000)"
          />
        </g>
      </svg>
    </div>
  )
}

import React, { ComponentProps } from "react"

type Props = ComponentProps<"svg">

const BlobIllustration = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 476 703"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M369.321 69.5424C434.564 69.7488 490.854 -16.4747 551.99 6.33086C610.747 28.249 605.181 117.815 639.517 170.334C670.36 217.509 730.095 245.791 744.229 300.366C758.384 355.02 750.997 421.013 715.886 465.201C679.364 511.164 598.145 493.957 557.077 535.9C522.013 571.711 551.136 649.258 509.046 676.45C469.043 702.293 413.608 674.691 369.321 657.197C331.594 642.293 312.19 597.969 274.223 583.69C231.1 567.471 179.188 591.798 138.408 570.35C94.68 547.351 63.1568 505.228 41.011 461.03C16.4231 411.958 -10.6367 355.451 4.25797 302.616C19.2307 249.504 89.8059 232.938 118.582 185.866C152.54 130.319 127.069 32.557 186.095 5.17313C245.568 -22.4176 303.772 69.335 369.321 69.5424Z"
        fill="#7D7B9E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M385.321 85.5424C450.564 85.7488 506.854 -0.474745 567.99 22.3309C626.747 44.249 621.181 133.815 655.517 186.334C686.36 233.509 746.095 261.791 760.229 316.366C774.384 371.02 766.997 437.013 731.886 481.201C695.364 527.164 614.145 509.957 573.077 551.9C538.013 587.711 567.136 665.258 525.046 692.45C485.043 718.293 429.608 690.691 385.321 673.197C347.594 658.293 328.19 613.969 290.223 599.69C247.1 583.471 195.188 607.798 154.408 586.35C110.68 563.351 79.1568 521.228 57.011 477.03C32.4231 427.958 5.36326 371.451 20.258 318.616C35.2307 265.504 105.806 248.938 134.582 201.866C168.54 146.319 143.069 48.557 202.095 21.1731C261.568 -6.41762 319.772 85.335 385.321 85.5424Z"
        fill="#CECBFF"
      />
    </svg>
  )
}

export default BlobIllustration

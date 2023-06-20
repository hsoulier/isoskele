import React, { ComponentProps } from "react"

type Props = ComponentProps<"svg"> & {
  size?: number
}

const ChevronLeft = ({ size = 16, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 19.1215L8 12.292L15 5.4624"
        stroke="#7887F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronLeft

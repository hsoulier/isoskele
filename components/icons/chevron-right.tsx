import React, { ComponentProps } from "react"

type Props = ComponentProps<"svg"> & {
  size?: number
}

const ChevronRight = ({
  size = 16,
  className = "text-ui-blue",
  ...props
}: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M9 4.87849L16 11.708L9 18.5376"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronRight

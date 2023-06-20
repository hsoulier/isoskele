import React, { ComponentProps } from "react"
const Instagram = ({
  size = 24,
  ...props
}: ComponentProps<"svg"> & { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 52.313 52.313"
    fill="currentColor"
    {...props}
  >
    <path
      d="M13.025,51.313A13.06,13.06,0,0,1,0,38.265V13.025A13.039,13.039,0,0,1,13.025,0H38.265A13.058,13.058,0,0,1,51.313,13.025V38.265A13.078,13.078,0,0,1,38.265,51.313ZM10.346,25.656A15.565,15.565,0,1,0,25.911,10.092,15.586,15.586,0,0,0,10.346,25.656ZM38.681,9.03a3.707,3.707,0,1,0,3.7-3.7A3.711,3.711,0,0,0,38.681,9.03ZM15.256,25.656a9.976,9.976,0,1,1,9.977,9.953A9.994,9.994,0,0,1,15.256,25.656Z"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
)
export default Instagram

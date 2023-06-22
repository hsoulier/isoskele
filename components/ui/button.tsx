import { cn } from "@/lib/utils"
import React, { ComponentProps } from "react"

type Props = ComponentProps<"button">

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "bg-ui-blue text-base text-ui-white py-2 px-12 rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

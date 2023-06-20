import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const Heading1 = ({ children, className }: ComponentProps<"h1">) => (
  <h1
    className={cn(
      "text-4xl md:text-8xl leading-snug font-bold relative",
      className
    )}
  >
    {children}
  </h1>
)
export const Heading2 = ({ children, className }: ComponentProps<"h2">) => (
  <h2 className={cn("font-bold text-3xl md:text-5xl", className)}>
    {children}
  </h2>
)
export const Heading3 = ({ children, className }: ComponentProps<"h3">) => (
  <h3 className={cn("text-4xl font-medium", className)}>{children}</h3>
)
export const Heading4 = ({ children, className }: ComponentProps<"h4">) => (
  <h4 className={cn("text-5xl font-bold", className)}>{children}</h4>
)

export const Paragraph = ({ children, className }: ComponentProps<"p">) => (
  <p className={cn("text-xl font-normal", className)}>{children}</p>
)

export const ParagraphBase = ({ children, className }: ComponentProps<"p">) => (
  <p className={cn("text-base", className)}>{children}</p>
)

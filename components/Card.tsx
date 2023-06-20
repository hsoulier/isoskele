import ChevronRight from "@/components/icons/chevron-right"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

type Props = {
  title?: string
  content?: string
  link?: boolean
  url?: string
}

const Card = ({ title, content, link, url }: Props) => {
  return (
    <div className="flex flex-col w-80">
      <div className="h-36 bg-ui-violet-base rounded-t-3xl w-full">
        <img
          src={url}
          className={cn(
            "translate-y-3 w-full h-full object-contain",
            !link && "opacity-50"
          )}
          alt="illustration"
        />
      </div>
      <div className="rounded-b-3xl bg-ui-white py-6 px-8 relative h-[220px]">
        <h3
          className={cn(
            "mt-3 text-4xl font-medium",
            !link && "opacity-50 text-ui-black"
          )}
        >
          {title}
        </h3>
        {content && <p className="text-ui-gray mt-4 mb-8">{content}</p>}
        {link && (
          <Link href="/" className="flex items-center gap-1">
            En savoir plus <ChevronRight className="text-ui-gray" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Card

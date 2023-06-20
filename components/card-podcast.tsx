import { Heading3, ParagraphBase } from "@/components/text"
import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  title: string
  description: string
  bg: string
}

const CardPodcast = ({ title, description, bg }: Props) => {
  return (
    <article className="bg-ui-violet-100 rounded-xl p-8 flex flex-col md:flex-row gap-8">
      <img
        src="/podcast.png"
        alt="human listen"
        className={cn("w-full md:w-56 h-56 rounded-md object-contain", bg)}
      />
      <div className="flex flex-col gap-4">
        <Heading3 className="mt-3">{title}</Heading3>
        <ParagraphBase>{description}</ParagraphBase>
      </div>
    </article>
  )
}

export default CardPodcast

import Clock from "@/components/icons/clock"
import Player from "@/components/icons/player"
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
      <div className="flex flex-col gap-4 justify-between">
        <Heading3 className="mt-3">{title}</Heading3>
        <ParagraphBase>{description}</ParagraphBase>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Player className="text-ui-blue" size={24} /> juin 2023
          </div>
          <div className="flex items-center gap-2">
            <Clock /> 15 min restante(s)
          </div>
          <div className="w-56 h-2 rounded-full bg-ui-violet-base relative">
            <div className="absolute top-0 left-0 rounded-full w-6 h-full bg-ui-blue" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardPodcast

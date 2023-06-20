import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  title: string
  description: string
  bg: string
}

const CardPodcast = ({ title, description, bg }: Props) => {
  return (
    <article className="bg-ui-violet-100 rounded-xl p-8 flex gap-8">
      <img
        src="/podcast.png"
        alt="human listen"
        className={cn("w-56 h-56 rounded-md", bg)}
      />
      <div className="flex flex-col gap-4">
        <h3 className="mt-3 text-4xl font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default CardPodcast

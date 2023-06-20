import CardPodcast from "@/components/card-podcast"
import Link from "next/link"
import React from "react"

type Props = {}

const Podcast = (props: Props) => {
  return (
    <section className="mx-24 mt-44">
      <div className="flex gap-5 items-end mb-9">
        <h1 className="text-5xl font-bold">Nos podcasts</h1>
        <Link href="/podcasts" className="underline uppercase">
          Voir tout
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <CardPodcast
          title="Vulgariser le numérique responsable avec Alizée Colin"
          description="Pour ce tout premier épisode de 2023, j’ai eu le plaisir de recevoir Alizée Colin. Alizée est Product Designer pour Fruggr, et consultante Numérique Responsable"
          bg="bg-ui-violet-200"
        />
        <CardPodcast
          title="Vulgariser le numérique responsable avec Alizée Colin"
          description="Pour ce tout premier épisode de 2023, j’ai eu le plaisir de recevoir Alizée Colin. Alizée est Product Designer pour Fruggr, et consultante Numérique Responsable"
          bg="bg-ui-violet-200"
        />
        <CardPodcast
          title="Vulgariser le numérique responsable avec Alizée Colin"
          description="Pour ce tout premier épisode de 2023, j’ai eu le plaisir de recevoir Alizée Colin. Alizée est Product Designer pour Fruggr, et consultante Numérique Responsable"
          bg="bg-ui-violet-200"
        />
      </div>
    </section>
  )
}

export default Podcast

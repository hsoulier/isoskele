import CardPodcast from "@/components/card-podcast"
import { Heading2 } from "@/components/text"
import Link from "next/link"
import React from "react"

type Props = {}

const Podcast = (props: Props) => {
  return (
    <section className="mx-8 md:mx-24 mt-44">
      <div className="flex gap-5 items-end mb-9">
        <Heading2>Nos podcasts</Heading2>
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
          title="Sobriété • Adopter un numérique plus responsable !"
          description="Avant de vous donner quelques clés pour adopter un numérique plus responsable, j’avais quand-même envie de vous en dire un peu plus sur les enjeux environnementaux qui en découlent ..."
          bg="bg-ui-turquoise"
        />
        <CardPodcast
          title="La souveraineté numérique"
          description="Selon le site Latribune.fr, la souveraineté numérique représente un idéal vers lequel tout le monde tend mais qui semble difficilement atteignable sans une prise de conscience globale des individus et sans le soutien des gouvernements."
          bg="bg-ui-blue"
        />
      </div>
    </section>
  )
}

export default Podcast

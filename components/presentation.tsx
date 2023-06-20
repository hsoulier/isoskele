import Button from "@/components/ui/button"
import React from "react"

type Props = {}

const Presentation = (props: Props) => {
  return (
    <section className="mt-24 mx-24 flex gap-11">
      <h2 className="font-bold text-5xl whitespace-nowrap">
        Qui sommes nous ?
      </h2>
      <div className="flex flex-col gap-11 text-xl">
        <p>
          Depuis toujours, Sofos défend une vision humaniste du web. Pour nous,
          il est inclusif, car un web de qualité est avant tout un web pour tout
          le monde. C’est pourquoi Sofos fait partie des membres fondateurs de
          Opquast, garant de l’accessibilité.
        </p>
        <p>
          Sofos s’engage également aux côtés de Global Compact et du Label
          Numérique Responsable, afin de garantir une transition numérique
          inclusive et responsable. Grâce à ces démarches en logique de progrès,
          nous nous attachons à tenir des engagements sur le court terme qui
          sont réalisables et vérifiés par les organismes de manière annuelle ou
          biannuelle..
        </p>
        <Button className="self-start font-bold">Découvrez ISOSKELE</Button>
      </div>
    </section>
  )
}

export default Presentation

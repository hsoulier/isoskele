import { Heading2, ParagraphBase } from "@/components/text"
import Button from "@/components/ui/button"
import React from "react"

type Props = {}

const Presentation = (props: Props) => {
  return (
    <section className="relative mt-24 mx-8 md:mx-24 flex gap-11 flex-col md:flex-row">
      <Heading2 className="whitespace-nowrap">Qui sommes nous ?</Heading2>
      <div className="flex flex-col gap-11">
        <ParagraphBase>
          Depuis toujours, Sofos défend une vision humaniste du web. Pour nous,
          il est inclusif, car un web de qualité est avant tout un web pour tout
          le monde. C’est pourquoi Sofos fait partie des membres fondateurs de
          Opquast, garant de l’accessibilité.
        </ParagraphBase>
        <ParagraphBase>
          Sofos s’engage également aux côtés de Global Compact et du Label
          Numérique Responsable, afin de garantir une transition numérique
          inclusive et responsable. Grâce à ces démarches en logique de progrès,
          nous nous attachons à tenir des engagements sur le court terme qui
          sont réalisables et vérifiés par les organismes de manière annuelle ou
          biannuelle..
        </ParagraphBase>
        <Button className="self-start font-bold">Découvrez ISOSKELE</Button>
      </div>
      <svg
        viewBox="0 0 184 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 -left-8 md:-left-24 md:-translate-y-1/2 -z-10 w-36"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 601.691C17.1725 588.078 32.2398 572.17 43.752 553.619C56.6259 532.873 56.9017 508.095 57.1793 483.156C57.4255 461.029 57.6732 438.776 66.7207 419.097C75.2688 400.505 91.1073 387.169 106.958 373.823C122.529 360.712 138.111 347.592 146.807 329.47C148.98 324.943 151.273 320.301 153.61 315.569C173.441 275.422 196.467 228.808 175.953 191.469C163.236 168.321 135.157 163.911 106.578 159.423C80.9349 155.396 54.8896 151.305 39.1763 133.56C20.4122 112.369 16.0299 82.8445 11.6743 53.4996C8.94707 35.1256 6.23028 16.822 0 0.67825V601.691Z"
          fill="#9CD9CE"
        />
      </svg>
    </section>
  )
}

export default Presentation

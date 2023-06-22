import { Heading2, Heading3, ParagraphBase } from "@/components/text"
import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  bg?: string
}

const Valeurs = ({ bg = "bg-ui-violet-100" }: Props) => {
  return (
    <div className={cn("mt-14 w-screen pb-16", bg)}>
      <section
        className="mx-8 md:mx-24 pt-24 block md:grid gap-28"
        style={{ gridTemplateColumns: "2fr 3fr" }}
      >
        <div className="flex flex-col gap-4">
          <Heading2 className="whitespace-nowrap">Nos valeurs</Heading2>
          <ParagraphBase>
            Ces valeurs reflètent notre engagement envers une approche éthique,
            responsable et inclusive du numérique.
          </ParagraphBase>

          <ParagraphBase>
            Elles guident nos décisions, nos actions et nos interactions
            quotidiennes, en nous permettant de construire des solutions qui
            répondent aux besoins de nos utilisateurs tout en contribuant à un
            monde numérique meilleur et plus équitable.
          </ParagraphBase>
          <img
            src="/bubble-gum-learning-the-instructions 1.png"
            alt="illustration"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col p-6 bg-ui-violet-base text-[#42445D] rounded-3xl">
            <Heading3 className="font-semibold">Numérique responsable</Heading3>
            <ParagraphBase>
              En adoptant la valeur du numérique responsable, nous nous
              engageons à intégrer une réflexion éthique et une responsabilité
              sociale dans toutes nos activités numériques. Nous nous efforçons
              de minimiser notre empreinte environnementale, de promouvoir la
              confidentialité et la sécurité des données, et de garantir une
              utilisation éthique et responsable de la technologie
            </ParagraphBase>
          </div>

          <div className="flex flex-col p-6 bg-ui-violet-200 text-[#42445D] rounded-3xl">
            <Heading3 className="font-semibold">Transparence</Heading3>
            <ParagraphBase>
              Nous considérons la transparence comme un pilier fondamental de la
              confiance et de l&apos;intégrité dans nos relations avec nos
              clients, nos partenaires et nos utilisateurs. Nous croyons en
              l&apos;importance de fournir des informations claires, précises et
              compréhensibles sur nos pratiques, nos politiques et nos
              intentions
            </ParagraphBase>
          </div>

          <div className="flex flex-col p-6 bg-ui-turquoise text-[#42445D] rounded-3xl">
            <Heading3 className="font-semibold">Accessible</Heading3>
            <ParagraphBase>
              Nous nous engageons à créer des solutions numériques inclusives
              qui permettent à chacun d&apos;accéder, de comprendre et de
              bénéficier de nos services. En concevant nos produits et nos
              interfaces de manière accessible, nous souhaitons supprimer les
              barrières et promouvoir une expérience utilisateur équitable pour
              tous.
            </ParagraphBase>
          </div>
        </div>
      </section>
      <Button className="mx-auto flex items-center mt-4 md:mt-0">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 16L4.5 17C4.5 18.6569 5.84315 20 7.5 20L17.5 20C19.1569 20 20.5 18.6569 20.5 17L20.5 16M16.5 12L12.5 16M12.5 16L8.5 12M12.5 16L12.5 4"
            stroke="#F2F2F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Télécharger notre charte
      </Button>
    </div>
  )
}

export default Valeurs

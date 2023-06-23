import { Heading2, Heading3, ParagraphBase } from "@/components/text"
import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  bg?: string
}

const Valeurs = ({ bg = "bg-ui-violet-100" }: Props) => {
  const router = useRouter()
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
      <Button
        onClick={() => router.push("/guidelines")}
        className="mx-auto flex items-center mt-4 md:mt-0"
      >
        Voir nos guildelines
      </Button>
    </div>
  )
}

export default Valeurs

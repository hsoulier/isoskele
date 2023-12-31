import Card from "@/components/Card"
import { Heading2, ParagraphBase } from "@/components/text"
import React from "react"

const Etudes = () => {
  return (
    <section className="mx-8 md:mx-24 flex flex-col gap-11 mt-44">
      <div className="flex justify-between relative">
        <div className="flex flex-col gap-11">
          <Heading2 className="whitespace-nowrap">Nos sujets d’études</Heading2>
          <ParagraphBase className="w-full md:w-1/2">
            Notre mission principale est de sensibiliser, d&apos;informer et
            d&apos;éduquer les utilisateurs sur les enjeux liés à l&apos;éthique
            et à la responsabilité numérique, afin de favoriser une utilisation
            responsable des technologies.
          </ParagraphBase>
        </div>
        <img
          src="/bubble-gum-test-tubes-and-flask.gif"
          alt="Lab"
          className="hidden md:block absolute right-0 -translate-y-1/3 w-[30vw]"
        />
      </div>
      <div className="flex flex-wrap justify-start gap-11">
        <Card
          title="Estime de soi"
          content="Quizz, événements à venir, livre blanc, podcasts,..."
          url="/bubble-gum-girl-waiting 1.png"
          link
        />
        <Card
          url="/bubble-gum-smartphone-with-chat-messages 1.png"
          title="La protection de vos donnés sur Internet"
        />
      </div>
    </section>
  )
}

export default Etudes

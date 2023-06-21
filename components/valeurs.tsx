import { Heading2, Heading3, ParagraphBase } from "@/components/text"
import Button from "@/components/ui/button"
import React from "react"

type Props = {}

const Valeurs = (props: Props) => {
  return (
    <div className="mt-14 w-screen bg-ui-violet-100 pb-16">
      <section
        className="mx-8 md:mx-24 pt-24 block md:grid gap-28"
        style={{ gridTemplateColumns: "2fr 3fr" }}
      >
        <div className="flex flex-col gap-4">
          <Heading2 className="whitespace-nowrap">Nos valeurs</Heading2>
          <ParagraphBase>
            Lorem ipsum dolor sit amet consectetur. Augue sit posuere vestibulum
            fringilla tristique enim fermentum. Nisi lobortis egestas massa
            consequat. Feugiat volutpat placerat sit ultricies vitae varius
            auctor elementum. Pharetra viverra augue turpis viverra vel faucibus
            ut.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              pretium sit odio non. Aenean dolor, ullamcorper amet dolor donec.
            </ParagraphBase>
          </div>

          <div className="flex flex-col p-6 bg-ui-violet-200 text-[#42445D] rounded-3xl">
            <Heading3 className="font-semibold">Transparence</Heading3>
            <ParagraphBase>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              pretium sit odio non. Aenean dolor, ullamcorper amet dolor donec.
            </ParagraphBase>
          </div>

          <div className="flex flex-col p-6 bg-ui-turquoise text-[#42445D] rounded-3xl">
            <Heading3 className="font-semibold">Accessible</Heading3>
            <ParagraphBase>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              pretium sit odio non. Aenean dolor, ullamcorper amet dolor donec.
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

import { Heading2 } from "@/components/text"
import React from "react"

type Props = {}

const Collaborations = (props: Props) => {
  return (
    <section className="mt-16 flex flex-col items-center mx-24 gap-11">
      <Heading2 className="whitespace-nowrap">
        Nous collaborons avec ...
      </Heading2>
      <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex justify-between w-full">
        <img
          className="w-full object-contain h-20"
          src="/internet-sans-crainte.png"
          alt="Internet sans crainte"
        />
        <img
          className="w-full object-contain h-20"
          src="/e-enfance.png"
          alt="Internet sans crainte"
        />
        <img
          className="w-full object-contain h-20"
          src="/global-compact.png"
          alt="Internet sans crainte"
        />
        <img
          className="w-full object-contain h-20"
          src="/numerique-responsable.png"
          alt="Internet sans crainte"
        />
      </div>
    </section>
  )
}

export default Collaborations

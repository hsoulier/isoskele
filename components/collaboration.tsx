import React from "react"

type Props = {}

const Collaborations = (props: Props) => {
  return (
    <section className="mt-16 flex flex-col items-center mx-24 gap-11">
      <h2 className="font-bold text-5xl whitespace-nowrap">
        Nous collaborons avec ...
      </h2>
      <div className="flex justify-between w-full">
        <img className="w-full object-contain h-20" src="/internet-sans-crainte.png" alt="Internet sans crainte" />
        <img className="w-full object-contain h-20" src="/e-enfance.png" alt="Internet sans crainte" />
        <img className="w-full object-contain h-20" src="/global-compact.png" alt="Internet sans crainte" />
        <img className="w-full object-contain h-20" src="/numerique-responsable.png" alt="Internet sans crainte" />
      </div>
    </section>
  )
}

export default Collaborations

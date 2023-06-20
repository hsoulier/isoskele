import ChevronLeft from "@/components/icons/chevron-left"
import ChevronRight from "@/components/icons/chevron-right"
import { Heading2, Heading3, Paragraph } from "@/components/text"
import Link from "next/link"
import React from "react"

type Props = {}
const Card = () => {
  return (
    <div className="snap-start w-full md:w-1/2 flex-shrink-0 flex-grow px-6 py-8 rounded-3xl bg-ui-white">
      <div className="flex justify-between">
        <span className="text-xl">31 mai - 03 juin</span>
        <span className="flex gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
              fill="#111827"
            />
          </svg>
          Nantes
        </span>
      </div>
      <Heading3 className="mt-3">Web2day x SOFOS</Heading3>
      <Paragraph className="text-ui-gray my-6">
        Le Web2day c’est 3 jours intenses et festifs dédiés aux nouvelles
        tendances et technologies du moment.
      </Paragraph>
      <span className="inline-block py-1 px-5 text-sm bg-ui-turquoise rounded-full">
        Conférences
      </span>
    </div>
  )
}

const Events = (props: Props) => {
  return (
    <div className="w-screen mt-44">
      <section className="mx-8 md:mx-24 flex flex-col px-8 md:px-20 py-10 gap-10 bg-ui-violet-200 rounded-3xl">
        <div className="flex justify-between">
          <div className="flex gap-5 items-end">
            <Heading2>Nos évènements</Heading2>
            <Link href="/events" className="underline uppercase">
              Voir tout
            </Link>
          </div>
          <div className="flex justify-between gap-4">
            <button className="grid place-content-center w-12 h-12 bg-ui-violet-100 rounded-full ">
              <ChevronLeft size={20} />
            </button>
            <button className="grid place-content-center w-12 h-12 bg-ui-violet-100 rounded-full ">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="snap-mandatory snap-x flex flex-nowrap overflow-scroll gap-3 justify-start flex-col md:flex-row ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  )
}

export default Events

import { Heading2, Paragraph } from "@/components/text"
import React from "react"

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <section className="mt-44 mx-8 md:mx-24 rounded-3xl bg-ui-blue py-8 md:py-14 flex flex-col items-center gap-8">
      <Heading2 className="text-white text-center w-4/5 md:w-3/5 relative">
        Abonnez-vous à notre newsletter
        <svg
          width="64"
          height="62"
          viewBox="0 0 64 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 -translate-y-1/2 -translate-x-full"
        >
          <path
            d="M30.2705 30.1954C30.5205 29.1954 30.6663 28.3829 30.9372 27.5912C33.6455 19.5912 37.9997 12.4662 42.958 5.69537C43.5414 4.9037 44.2705 4.1537 45.083 3.6537C45.5205 3.38287 46.3955 3.42454 46.8955 3.69537C47.2705 3.9037 47.5414 4.7162 47.458 5.17454C47.3122 6.04954 46.9997 6.94537 46.5622 7.73704C43.6872 12.9662 40.7913 18.1745 37.8538 23.362C36.7497 25.2995 35.583 27.2162 34.4372 29.1329C34.0622 29.7787 33.6455 30.4037 33.208 30.987C32.7288 31.6537 31.9997 32.0495 31.2705 31.612C30.7913 31.3204 30.2705 31.112 30.2705 30.1954Z"
            fill="#F2F2F2"
          />
          <path
            d="M59.7711 61.217C58.7711 61.0503 57.6044 60.9253 56.4794 60.6753C52.0419 59.6753 47.6044 58.6753 43.1878 57.6336C42.2294 57.4045 41.2919 57.0086 40.4378 56.5503C39.2919 55.9461 38.8961 55.092 39.0836 54.1545C39.2711 53.217 40.0211 52.6336 41.3336 52.6128C42.2294 52.592 43.1878 52.6128 44.0419 52.8211C49.6461 54.2378 55.2503 55.6961 60.8336 57.1753C61.4586 57.342 62.1044 57.6336 62.5836 58.0503C63.7919 59.0711 63.4169 60.6753 61.8752 61.0711C61.2711 61.217 60.5836 61.1545 59.7711 61.217Z"
            fill="#F2F2F2"
          />
          <path
            d="M1.22919 5.36218C1.31252 4.38302 1.52086 3.40385 1.77086 2.44552C2.00002 1.59135 2.58336 0.987184 3.52086 0.903851C4.31252 0.841351 5.16669 1.63302 5.29169 2.67468C5.45835 4.07052 5.60419 5.48719 5.54169 6.88302C5.35419 11.0914 5.08336 15.3205 4.79169 19.5289C4.68752 20.9247 4.50002 22.3205 4.27086 23.7164C4.18752 24.1955 4.02086 24.6955 3.75002 25.0705C3.02086 26.133 1.68753 26.0497 1.16669 24.9039C0.875026 24.258 0.750026 23.4664 0.750026 22.758C0.64586 20.4247 0.958358 8.82052 1.22919 5.36218Z"
            fill="#F2F2F2"
          />
        </svg>
      </Heading2>
      <Paragraph className="w-4/5 md:w-2/5 text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Paragraph>
      <input
        type="email"
        className="bg-ui-white rounded-lg px-5 py-3 w-2/3 max-w-[20rem]"
        placeholder="Adresse mail ..."
      />
    </section>
  )
}

export default Newsletter

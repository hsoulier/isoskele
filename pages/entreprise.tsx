import Card from "@/components/Card"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Presentation from "@/components/presentation"
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  ParagraphBase,
} from "@/components/text"
import Button from "@/components/ui/button"
import Valeurs from "@/components/valeurs"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { withRouter } from "next/router"
import React from "react"

type Props = {
  router: any
}

const Entreprise = ({ router }: Props) => {
  return (
    <>
      <main className="pb-80 relative">
        <Navbar />
        <div className="flex flex-col gap-16 items-center mt-10">
          <Heading1 className="text-center">
            Votre entreprise et le
            <br />
            numérique responsable
            <svg
              viewBox="0 0 330 330"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-ui-black absolute -top-24 -right-28 w-56 h-56"
            >
              <path
                d="M231.2 186.825C225.397 186.697 220.481 186.712 215.586 186.448C207.283 186.035 199.1 185.257 191.475 181.364C183.743 177.406 179.612 171.09 179.947 162.594C180.16 157.377 181.789 152.232 182.967 147.108C183.438 145.107 184.481 143.206 185.617 140.341C181.502 142.342 178.293 143.965 175.021 145.452C167.039 149.118 159.201 153.114 151.02 156.224C139.83 160.541 131.455 156.441 127.508 145.037C125.964 140.564 125.499 135.669 124.591 130.946C124.326 129.524 124.269 128.08 124.083 126.365C118.296 132.369 112.88 138.157 107.279 143.689C94.1965 156.589 82.2977 148.723 77.6226 136.833C76.3717 133.654 75.8781 130.102 75.356 126.679C75.0841 124.378 76.0557 122.192 78.5995 121.92C80.9004 121.648 82.0297 123.491 82.616 125.592C83.2236 127.657 83.6956 129.787 84.5176 131.737C85.4826 134.017 86.4833 136.317 87.8771 138.368C91.808 144.127 96.2243 145.027 101.783 140.781C105.713 137.794 109.221 134.213 112.722 130.726C115.98 127.481 119.102 124.058 122.224 120.635C123.853 118.891 125.554 117.19 128.141 117.818C131.113 118.532 131.564 121.183 131.993 123.627C132.558 126.736 132.651 129.901 133.388 132.967C134.267 136.847 135.24 140.734 136.698 144.378C138.692 149.315 141.422 150.758 146.588 149.436C151.526 148.17 156.506 146.59 161.186 144.539C171.19 140.093 180.993 135.332 190.818 130.536C193.147 129.407 195.241 128.913 197.235 130.692C199.143 132.371 198.772 134.529 197.879 136.666C196.279 140.468 194.493 144.255 193.093 148.129C191.878 151.53 190.693 155.046 190.122 158.59C188.572 168.059 191.832 173.318 200.743 176.768C207.439 179.375 214.428 180.603 221.559 180.945C226.697 181.209 231.842 181.137 236.958 181.193C239.666 181.214 242.468 181.242 243.633 184.322C244.698 187.244 242.926 189.388 241.09 191.397C240.297 192.233 239.382 192.948 238.503 193.684C236.71 195.135 234.981 196.721 233.052 197.993C218.769 207.549 216.584 221.155 220.223 236.554C220.903 239.391 222.475 242.034 223.726 244.728C224.334 246.064 225.363 247.265 225.799 248.644C226.135 249.623 226.199 251.216 225.614 251.788C224.985 252.431 223.413 252.46 222.448 252.367C220.354 252.132 218.268 250.588 217.081 249.002C214.744 245.851 212.521 242.429 211.213 238.777C208.282 230.703 207.959 222.25 209.137 213.725C210.144 206.457 214.002 200.754 219.389 196.066C222.947 193.05 226.705 190.348 231.2 186.825Z"
                fill="currentColor"
              />
            </svg>
          </Heading1>
          <Paragraph className="font-normal text-center w-4/5">
            Notre mission principale est de sensibiliser, d&apos;informer et
            d&apos;éduquer les utilisateurs sur les enjeux liés à l&apos;éthique
            et à la responsabilité numérique, afin de favoriser une utilisation
            responsable des technologies.
          </Paragraph>
          <Button
            onClick={() => router.push("/guidelines")}
            className="bg-ui-black text-ui-white font-bold text-2xl"
          >
            Voir nos Guidelines
          </Button>
        </div>
        <img
          src="/bubble-gum-web-design 1.gif"
          alt="Illustrations"
          className="absolute bottom-0 left-0 w-3/12 h-auto"
        />
      </main>
      <Presentation blob={false} />
      <Valeurs bg="" />

      <section className="relative flex flex-col justify-start pl-24 w-full h-auto py-20 bg-ui-violet-100 gap-5">
        <Heading2>Nos autres expertises by Isoskele</Heading2>
        <ParagraphBase>
          Repose sur des expertises solides et complémentaires au service de vos
          enjeux
        </ParagraphBase>
        <div className="flex flex-row justify-between w-full flex-nowrap gap-6 overflow-scroll pr-4">
          <Card
            bg="bg-white"
            className="shrink-0"
            title="Vitaminez votre stratégie de marque"
            url="/bubble-gum-girl-waiting 1.png"
            link
          />
          <Card
            bg="bg-white"
            className="shrink-0"
            title="Développez votre visibilité"
            url="/bubble-gum-girl-waiting 1.png"
            link
          />
          <Card
            bg="bg-white"
            className="shrink-0"
            title="Amplifiez l’engagement"
            url="/bubble-gum-girl-waiting 1.png"
            link
          />
          <Card
            bg="bg-white"
            className="shrink-0"
            title="Optimiser la conversion"
            url="/bubble-gum-girl-waiting 1.png"
            link
          />
          <Card
            bg="bg-white"
            className="shrink-0"
            title="Rentabiliez votre capital data"
            url="/bubble-gum-girl-waiting 1.png"
            link
          />
          <Card
            bg="bg-white"
            className="shrink-0"
            title="Boostez votre intelligence marketing"
            url="/bubble-gum-girl-waiting 1.png"
            link
          />
        </div>
      </section>

      <section className="mx-24 mt-32">
        <div className="flex gap-5 items-end mb-9">
          <Heading2>Nos formations</Heading2>
          <Link href="/formations" className="underline uppercase">
            Voir tout
          </Link>
        </div>

        <Paragraph className="w-1/2">
          Nos formations sont conçues pour vous aider à comprendre les principes
          fondamentaux de l&apos;éthique responsable et à les appliquer dans la vie
          professionnelle et personnelle. Que vous soyez une entreprise
          cherchant à promouvoir une culture éthique, que vous souhaitez
          renforcer vos compétences de prise de décision éthique, ou que vous
          êtes désireuse de mieux comprendre les enjeux éthiques contemporains,
          nos programmes de formation sont adaptés à vos besoins.
        </Paragraph>

        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full px-6 py-8 rounded-3xl bg-ui-white">
            <div className="flex gap-2 justify-end">
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
              A distance
            </div>
            <Heading3 className="mt-3">
              Ecrans et réseaux sociaux : accompagner et éduquer les jeunes aux
              bonnes pratiques
            </Heading3>
            <Paragraph className="text-ui-gray my-6">
              Cette formation permettra aux participants de développer leurs
              savoirs pour accompagner les jeunes et leur entourage dans
              l&apos;usage des outils numériques.
            </Paragraph>
            <span
              className={cn(
                "inline-block py-1 px-5 text-sm rounded-full bg-ui-orange"
              )}
            >
              Formation
            </span>
          </div>
          <div className="w-full px-6 py-8 rounded-3xl bg-ui-white">
            <div className="flex gap-2 justify-end">
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
              A distance
            </div>
            <Heading3 className="mt-3">
              Ecrans et réseaux sociaux : accompagner et éduquer les jeunes aux
              bonnes pratiques
            </Heading3>
            <Paragraph className="text-ui-gray my-6">
              Cette formation permettra aux participants de développer leurs
              savoirs pour accompagner les jeunes et leur entourage dans
              l&apos;usage des outils numériques.
            </Paragraph>
            <span
              className={cn(
                "inline-block py-1 px-5 text-sm rounded-full bg-ui-orange"
              )}
            >
              Formation
            </span>
          </div>
          <div className="w-full px-6 py-8 rounded-3xl bg-ui-white">
            <div className="flex gap-2 justify-end">
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
              A distance
            </div>
            <Heading3 className="mt-3">
              Ecrans et réseaux sociaux : accompagner et éduquer les jeunes aux
              bonnes pratiques
            </Heading3>
            <Paragraph className="text-ui-gray my-6">
              Cette formation permettra aux participants de développer leurs
              savoirs pour accompagner les jeunes et leur entourage dans
              l&apos;usage des outils numériques.
            </Paragraph>
            <span
              className={cn(
                "inline-block py-1 px-5 text-sm rounded-full bg-ui-orange"
              )}
            >
              Formation
            </span>
          </div>
        </div>
      </section>

      <section className="mt-44 mx-8 md:mx-24 rounded-3xl bg-ui-blue py-8 md:py-14 flex flex-col items-center gap-8">
        <Heading2 className="text-white text-center w-3/5 relative">
          Echelle de maturité : dites nous où en êtes-vous ?
          <svg
            width="64"
            height="62"
            viewBox="0 0 64 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-2/3 text-white"
          >
            <path
              d="M30.2705 30.1954C30.5205 29.1954 30.6663 28.3829 30.9372 27.5912C33.6455 19.5912 37.9997 12.4662 42.958 5.69537C43.5414 4.9037 44.2705 4.1537 45.083 3.6537C45.5205 3.38287 46.3955 3.42454 46.8955 3.69537C47.2705 3.9037 47.5414 4.7162 47.458 5.17454C47.3122 6.04954 46.9997 6.94537 46.5622 7.73704C43.6872 12.9662 40.7913 18.1745 37.8538 23.362C36.7497 25.2995 35.583 27.2162 34.4372 29.1329C34.0622 29.7787 33.6455 30.4037 33.208 30.987C32.7288 31.6537 31.9997 32.0495 31.2705 31.612C30.7913 31.3204 30.2705 31.112 30.2705 30.1954Z"
              fill="currentColor"
            />
            <path
              d="M59.7711 61.217C58.7711 61.0503 57.6044 60.9253 56.4794 60.6753C52.0419 59.6753 47.6044 58.6753 43.1878 57.6336C42.2294 57.4045 41.2919 57.0086 40.4378 56.5503C39.2919 55.9461 38.8961 55.092 39.0836 54.1545C39.2711 53.217 40.0211 52.6336 41.3336 52.6128C42.2294 52.592 43.1878 52.6128 44.0419 52.8211C49.6461 54.2378 55.2503 55.6961 60.8336 57.1753C61.4586 57.342 62.1044 57.6336 62.5836 58.0503C63.7919 59.0711 63.4169 60.6753 61.8752 61.0711C61.2711 61.217 60.5836 61.1545 59.7711 61.217Z"
              fill="currentColor"
            />
            <path
              d="M1.22919 5.36218C1.31252 4.38302 1.52086 3.40385 1.77086 2.44552C2.00002 1.59135 2.58336 0.987184 3.52086 0.903851C4.31252 0.841351 5.16669 1.63302 5.29169 2.67468C5.45835 4.07052 5.60419 5.48719 5.54169 6.88302C5.35419 11.0914 5.08336 15.3205 4.79169 19.5289C4.68752 20.9247 4.50002 22.3205 4.27086 23.7164C4.18752 24.1955 4.02086 24.6955 3.75002 25.0705C3.02086 26.133 1.68753 26.0497 1.16669 24.9039C0.875026 24.258 0.750026 23.4664 0.750026 22.758C0.64586 20.4247 0.958358 8.82052 1.22919 5.36218Z"
              fill="currentColor"
            />
          </svg>
        </Heading2>
        <Paragraph className="w-4/5 md:w-2/5 text-center text-white">
          Avec notre échelle de maturité éthique et responsable : vous vous
          positionnez, nous vous accompagnons
        </Paragraph>
        <Button
          className="bg-white text-ui-blue font-bold"
          onClick={() => router.push("/quiz")}
        >
          Faire le test
        </Button>
      </section>
      <Footer />
    </>
  )
}

export default withRouter(Entreprise)

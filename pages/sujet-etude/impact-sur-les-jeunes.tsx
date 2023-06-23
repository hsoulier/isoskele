import Card from "@/components/Card"
import Events from "@/components/events"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Newsletter from "@/components/newsletter"
import Statistic from "@/components/statistic"
import { Heading1, Heading2, Paragraph } from "@/components/text"
import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { withRouter } from "next/router"
import React from "react"

const ImpactSurLesJeunes = ({ router }: any) => {
  return (
    <>
      <main className="bg-ui-violet-200 pb-48 relative">
        <Navbar black />
        <div className="ml-32 mt-10">
          <Link className="text-ui-gray" href="/">
            Accueil |{" "}
          </Link>
          <Link className="text-ui-gray" href="/sujets-etude">
            Sujets d&apos;étude
          </Link>{" "}
          <Link href="">| Impact des réseaux sociaux</Link>
        </div>
        <div className="flex flex-col gap-16 items-center mt-10">
          <Heading1>
            Impact des réseaux
            <br />
            sociaux sur les ados
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
          <Paragraph className="font-normal text-center w-2/5">
            Vous voulez savoir quel est l’impact des réseaux sociaux sur votre
            santé mentale ?
          </Paragraph>
          <Button
            onClick={() => router.push("/quiz")}
            className="bg-ui-black text-ui-white font-bold text-2xl"
          >
            Passer le quizz
          </Button>
        </div>
        <img
          src="/bubble-gum-social-media.gif"
          alt="Illustrations"
          className="absolute bottom-0 right-0 -scale-x-100 w-1/3 h-auto mb-16"
        />
        <svg
          width="46"
          height="154"
          viewBox="0 0 46 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <path
            d="M2 2C2.00017 120.75 30.6905 85.7939 34.822 77.8929C70.3049 10.0357 -9.53292 47.5357 4.66125 152"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </main>
      <Statistic />
      <div className="flex flex-col gap-14">
        <Events />
        <div className="flex flex-col gap-14 mx-24">
          <Heading2>Pour aller plus loin</Heading2>
          <div className="justify-between flex items-center">
            <Card
              title="Réglementation sur les réseaux sociaux"
              url="/bubble-gum-girl-waiting 1.png"
              link
            />
            <Card
              title="Les procédures de signalement"
              content=""
              url="/bubble-gum-thinking-man 1.png"
              link
            />
            <Card
              title="F.A.Q. Parents"
              content=""
              url="/bubble-gum-business-man-checks-calendar 1.png"
              link
            />
          </div>
          <Heading2>Nos ressources</Heading2>
        </div>
        <div className="ml-24 gap-8 justify-between flex items-center overflow-x-scroll">
          {[
            {
              color: "bg-ui-violet-base",
              content: (
                <>
                  Fiche pédagogique :<br />
                  Hyperconnexion
                </>
              ),
            },
            {
              color: "bg-ui-violet-200",
              content: (
                <>
                  Fiche pédagogique :<br />
                  Revenge Porn
                </>
              ),
            },
            {
              color: "bg-ui-orange",
              content: (
                <>
                  Fiche pédagogique :<br />
                  Contrôle parental
                </>
              ),
            },
            {
              color: "bg-ui-turquoise",
              content: (
                <>
                  Fiche pédagogique :<br />
                  Cyberharcèlement
                </>
              ),
            },
          ].map(({ color, content }, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-2xl text-4xl font-semibold shrink-0",
                color
              )}
            >
              {content}
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  )
}

export default withRouter(ImpactSurLesJeunes)

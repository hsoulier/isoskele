import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Heading1, Paragraph } from "@/components/text"
import Button from "@/components/ui/button"
import React from "react"

type Props = {}

const elements = [
  {
    title: "Accessibilité",
    point1:
      "Assurez-vous que vos produits numériques sont accessibles à tous les utilisateurs, y compris ceux ayant des limitations physiques, sensorielles ou cognitives.",
    point2:
      "Adoptez les normes d'accessibilité reconnues (comme les WCAG) pour garantir une expérience utilisateur inclusive.",
  },
  {
    title: "Transparence",
    point1:
      "Fournissez des informations claires et compréhensibles sur la manière dont vous collectez, utilisez et stockez les données personnelles des utilisateurs.",
    point2:
      "Informez les utilisateurs sur les algorithmes utilisés et les décisions automatisées qui peuvent les affecter.",
  },
  {
    title: "Éthique sociale",
    point1:
      "Respectez les droits de l'homme dans toutes vos activités numériques, en évitant notamment les discriminations et en promouvant la diversité et l'inclusion.",
    point2:
      "Veillez à ce que vos partenaires commerciaux respectent également des normes éthiques et sociales élevées.",
  },
  {
    title: "Eco-conception",
    point1:
      "Réduisez la consommation d'énergie de vos produits numériques en adoptant des pratiques d'éco-conception, comme l'optimisation des performances et la gestion efficace des ressources.",
    point2:
      "Encouragez la durabilité en favorisant la réparabilité, la recyclabilité et l'utilisation de matériaux respectueux de l'environnement.",
  },
  {
    title: "Sensibilisation",
    point1:
      "Sensibilisez les utilisateurs aux enjeux du numérique responsable et de l'éthique sociale à travers des campagnes de communication et des actions de formation.",
    point2:
      "Partagez des bonnes pratiques et des ressources pour encourager d'autres acteurs à adopter des approches similaires.",
  },
  {
    title: "Participation des parties prenantes",
    point1:
      "Impliquez les parties prenantes pertinentes, y compris les utilisateurs, les experts en la matière, les organisations de la société civile et les décideurs politiques, dans le processus de prise de décision.",
    point2: "",
  },
  {
    title: "Audit et évaluation",
    point1:
      "Réalisez régulièrement des audits internes pour évaluer la conformité de vos pratiques aux normes d'accessibilité, de transparence, d'éthique sociale et d'éco-conception.",
    point2:
      "Encouragez des évaluations externes indépendantes pour renforcer la confiance et la crédibilité de votre activité.",
  },
  {
    title: "Collaboration",
    point1:
      "Collaborez avec d'autres acteurs du secteur pour partager des connaissances, développer des normes communes et promouvoir l'adoption de pratiques durables et éthiques.",
    point2: "",
  },
  {
    title: "Veilles technologiques",
    point1:
      "Restez informé des avancées technologiques et des tendances émergentes dans le domaine du numérique responsable et de l'éthique sociale, afin d'adapter constamment vos pratiques.",
    point2: "",
  },
  {
    title: "Responsabilité sociale",
    point1:
      "Intégrez la responsabilité sociale dans votre modèle d'affaires en alignant vos objectifs économiques avec des objectifs sociaux et environnementaux plus larges.",
    point2: "",
  },
]

const Guidelines = (props: Props) => {
  return (
    <>
      <main className="bg-ui-violet-200 pb-16 relative min-h-screen flex flex-col justify-center gap-16">
        <Navbar black />
        <div className="flex flex-col gap-16 items-center mt-10">
          <Heading1 className="text-center">
            Nos Guidelines pour un
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
        </div>
        <img
          src="/bubble-gum-support 1.gif"
          alt="Illustrations"
          className="w-1/3 h-auto self-center"
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
      <div className="bg-white pt-40 pb-16 flex flex-col gap-16">
        <div className="mx-24 grid grid-cols-2 gap-10">
          {elements.map(({ point1, point2, title }) => (
            <div
              key={title}
              className="flex flex-col gap-6 px-8 py-6 bg-ui-violet-100 rounded-3xl"
            >
              <div className="flex items-center justify-start rounded-lg py-4 px-6 bg-ui-violet-base text-3xl font-bold">
                {title}
              </div>
              <p className="flex gap-4">
                <span>1. </span>
                {point1}
              </p>
              {point2 && (
                <p className="flex gap-4">
                  <span>2. </span>
                  {point2}
                </p>
              )}
            </div>
          ))}
        </div>
        <Paragraph className="mx-24">
          Ces directives fournissent un cadre général pour guider votre activité
          d&apos;expertise du numérique responsable et éthique sociale.
          N&apos;hésitez pas à les adapter en fonction de vos besoins
          spécifiques et des valeurs de votre entreprise.Ces directives
          fournissent un cadre général pour guider votre activité
          d&apos;expertise du numérique responsable et éthique sociale.
          N&apos;hésitez pas à les adapter en fonction de vos besoins
          spécifiques et des valeurs de votre entreprise.
        </Paragraph>
        <Footer />
      </div>
    </>
  )
}

export default Guidelines

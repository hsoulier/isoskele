import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Heading1, Heading2, Paragraph, ParagraphBase } from "@/components/text"
import Button from "@/components/ui/button"
import { Check } from "lucide-react"
import { withRouter } from "next/router"
import React from "react"

const quizContent = [
  {
    question:
      "Combien de temps passez-vous en moyenne sur les réseaux sociaux par jour?",
    a1: "Moins d'une heure",
    a2: "Entre 1 et 2 heures",
    a3: "Entre 2 et 4 heures",
    a4: "Plus de 4 heures",
  },
  {
    question:
      "Comment vous sentez-vous après avoir comparé votre vie à celle des autres sur les réseaux sociaux?",
    a1: "Satisfait(e) et inspiré(e)",
    a2: "Neutre, ça ne me dérange pas",
    a3: "Insatisfait(e) de ma propre vie",
    a4: "Déprimé(e) et anxieux(se)",
  },
  {
    question:
      "Avez-vous déjà ressenti une pression pour obtenir plus de likes, de followers ou de commentaires sur vos publications?",
    a1: "Jamais",
    a2: "Rarement",
    a3: "Parfois",
    a4: "Souvent",
  },
  {
    question:
      "Lorsque vous recevez des commentaires négatifs ou des critiques sur les réseaux sociaux, comment cela vous affecte-t-il?",
    a1: "Je les ignore facilement",
    a2: "Je me sens légèrement affecté(e), mais je passe à autre chose rapidement",
    a3: "Cela me touche, mais je réussis à gérer mes émotions",
    a4: "Cela me bouleverse profondément et affecte mon estime de moi-même",
  },
  {
    question:
      "À quelle fréquence retouchez-vous vos photos avant de les publier sur les réseaux sociaux?",
    a1: "Jamais, je les publie telles quelles",
    a2: "Rarement, seulement pour des occasions spéciales",
    a3: "Parfois, lorsque je veux paraître plus attrayant(e)",
    a4: "Souvent, j'applique toujours des filtres et des modifications",
  },
  {
    question:
      "Quelle importance accordez-vous au nombre de likes et de followers que vous avez sur les réseaux sociaux?",
    a1: "Aucune, cela ne définit pas ma valeur personnelle",
    a2: "Pas beaucoup, mais j'apprécie quand j'ai plus de likes et de followers",
    a3: "Assez, j'aime avoir un nombre élevé de likes et de followers",
    a4: "Énorme, mon estime de moi-même dépend en grande partie de ces chiffres",
  },
  {
    question:
      "Avez-vous déjà caché ou supprimé des publications sur les réseaux sociaux parce que vous n'étiez pas satisfait(e) de l'image que vous y présentiez?",
    a1: "Non, jamais",
    a2: "Rarement",
    a3: "Parfois",
    a4: "Souvent",
  },
  {
    question:
      'Comment vous sentez-vous lorsque vous voyez des personnes avec des corps "parfaits" ou une vie "parfaite" sur les réseaux sociaux?',
    a1: "Je suis heureux(se) pour elles",
    a2: "Je n'y prête pas vraiment attention",
    a3: "Je me sens légèrement jaloux(se), mais ça ne me dérange pas trop",
    a4: "Je me sens mal dans ma peau",
  },
  {
    question:
      "Avez-vous déjà ressenti le besoin de mettre en scène votre vie ou d'exagérer vos réussites sur les réseaux sociaux pour paraître plus intéressant(e)?",
    a1: "Non, jamais",
    a2: "Rarement",
    a3: "Parfois",
    a4: "Souvent",
  },
  {
    question:
      "Comment vous sentez-vous lorsque vous ne recevez pas autant de likes ou de commentaires que vous le souhaiteriez sur une publication?",
    a1: "Ça ne me dérange pas du tout",
    a2: "Je me sens légèrement déçu(e), mais je passe à autre chose rapidement",
    a3: "Cela me rend un peu triste, mais je relativise",
    a4: "Je me sens mal, comme si ma valeur était remise en question",
  },
  {
    question:
      "Êtes-vous plus enclin(e) à vous comparer aux autres depuis que vous utilisez les réseaux sociaux?",
    a1: "Non, pas du tout",
    a2: "Pas vraiment, cela n'a pas beaucoup changé",
    a3: "Un peu plus, mais je fais attention à ne pas trop me comparer",
    a4: "Oui, considérablement plus qu'avant",
  },
  {
    question:
      "À quelle fréquence partagez-vous des photos ou des moments de votre vie sur les réseaux sociaux?",
    a1: "Rarement, seulement pour des moments spéciaux",
    a2: "De temps en temps, lorsque je trouve quelque chose d'intéressant à partager",
    a3: "Souvent, j'aime partager régulièrement des moments de ma vie",
    a4: "Très souvent, je partage presque tout ce que je fais",
  },
  {
    question:
      "Comment vous sentez-vous lorsque vous êtes déconnecté(e) des réseaux sociaux pendant une période prolongée?",
    a1: "Cela ne me dérange pas du tout",
    a2: "Je me sens légèrement déconnecté(e), mais je m'adapte facilement",
    a3: "Je me sens un peu anxieux(se), mais je m'en sors",
    a4: "Je me sens très anxieux(se) et mal à l'aise, j'ai du mal à m'en passer",
  },
  {
    question:
      "Avez-vous déjà éprouvé le besoin de supprimer ou de bloquer quelqu'un sur les réseaux sociaux en raison de la comparaison négative qu'il vous inspirait?",
    a1: "Non, jamais",
    a2: "Rarement",
    a3: "Parfois",
    a4: "Souvent",
  },
  {
    question:
      "À quelle fréquence ressentez-vous le besoin de vérifier les réseaux sociaux pour voir ce que les autres publient?",
    a1: "Rarement, seulement lorsque j'ai du temps libre",
    a2: "De temps en temps, cela dépend de mon humeur",
    a3: "Souvent, je vérifie régulièrement",
    a4: "Très souvent, je vérifie constamment, même pendant mes activités quotidiennes",
  },
  {
    question:
      "Comment vous sentez-vous lorsque vous n'obtenez pas de réponses ou de réactions à vos messages ou commentaires sur les réseaux sociaux?",
    a1: "Je m'en fiche complètement",
    a2: "Je me sens légèrement ignoré(e), mais ça ne me dérange pas trop",
    a3: "Je me sens un peu rejeté(e), mais je passe rapidement à autre chose",
    a4: "Je me sens mal et non valorisé(e), cela affecte mon estime de moi-même",
  },
  {
    question:
      "Avez-vous déjà ressenti de la frustration ou de la jalousie lorsque vous voyez des personnes que vous connaissez recevoir plus de likes ou d'attention que vous sur les réseaux sociaux?",
    a1: "Non, jamais",
    a2: "Rarement",
    a3: "Parfois",
    a4: "Souvent",
  },
  {
    question:
      "Comment vous sentez-vous lorsque vous publiez quelque chose sur les réseaux sociaux et que vous n'obtenez pas les réactions que vous espériez?",
    a1: "Cela ne me dérange pas du tout",
    a2: "Je me sens légèrement déçu(e), mais je relativise",
    a3: "Je me sens un peu triste, mais je m'en remets rapidement",
    a4: "Je me sens mal et non apprécié(e), cela affecte mon estime de moi-même",
  },
  {
    question:
      "Avez-vous déjà eu l'impression que votre valeur personnelle était liée à votre popularité ou à votre présence sur les réseaux sociaux?",
    a1: "Non, jamais",
    a2: "Rarement",
    a3: "Parfois",
    a4: "Souvent",
  },
  {
    question:
      "Êtes-vous satisfait(e) de votre estime de vous-même lorsque vous utilisez les réseaux sociaux?",
    a1: "Oui, totalement",
    a2: "Dans l'ensemble, oui",
    a3: "Pas vraiment, cela a un impact négatif sur moi",
    a4: "Non, pas du tout",
  },
] as const

const Quiz = ({ router }: any) => {
  return (
    <>
      <main className="bg-ui-violet-200 pb-80 relative">
        <Navbar black />
        <div className="flex flex-col gap-16 items-center mt-10">
          <Heading1 className="text-center">
            Quel impact ont les
            <br />
            réseaux sociaux sur toi ?
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
            Découvrez notre questionnaire sur les impacts des réseaux sociaux
            chez les adolescents âgés de 11 à 16 ans. Participez de manière
            anonyme et contribuez à la recherche sur les effets des médias
            sociaux. Votre voix compte pour mieux comprendre ces enjeux et
            développer des solutions adaptées. Rejoignez-nous pour promouvoir
            une utilisation responsable des réseaux sociaux.
          </Paragraph>
          <Button
            onClick={() => router.push("/quiz")}
            className="bg-ui-black text-ui-white font-bold text-2xl"
          >
            Passer le Quiz
          </Button>
        </div>
        <img
          src="/bubble-gum-financial-statistics 1.png"
          alt="Illustrations"
          className="absolute -bottom-16 right-0 w-1/3 h-auto"
        />
        <svg
          width="46"
          height="154"
          viewBox="0 0 46 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <path
            d="M2 2C2.00017 120.75 30.6905 85.7939 34.822 77.8929C70.3049 10.0357 -9.53292 47.5357 4.66125 152"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </main>
      <section className="bg-white pt-16 flex justify-center flex-col gap-16">
        <div className="mx-24 flex flex-col justify-start gap-12">
          {quizContent.map(({ question, a1, a2, a3, a4 }, index) => (
            <div key={index}>
              <Heading2 className="md:text-3xl mb-8 text-ui-blue">
                {index + 1}- {question}
              </Heading2>
              <div className="flex flex-col gap-3">
                {a1 && (
                  <ParagraphBase
                    onClick={(e) =>
                      e.currentTarget.classList.toggle("no-check")
                    }
                    className="flex items-center gap-4 no-check cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-lg border border-ui-black grid place-content-center">
                      <Check size="18" />
                    </span>
                    {a1}
                  </ParagraphBase>
                )}
                {a2 && (
                  <ParagraphBase
                    onClick={(e) =>
                      e.currentTarget.classList.toggle("no-check")
                    }
                    className="flex items-center gap-4 no-check cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-lg border border-ui-black grid place-content-center">
                      <Check size="18" />
                    </span>
                    {a2}
                  </ParagraphBase>
                )}
                {a3 && (
                  <ParagraphBase
                    onClick={(e) =>
                      e.currentTarget.classList.toggle("no-check")
                    }
                    className="flex items-center gap-4 no-check cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-lg border border-ui-black grid place-content-center">
                      <Check size="18" />
                    </span>
                    {a3}
                  </ParagraphBase>
                )}
                {a4 && (
                  <ParagraphBase
                    onClick={(e) =>
                      e.currentTarget.classList.toggle("no-check")
                    }
                    className="flex items-center gap-4 no-check cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-lg border border-ui-black grid place-content-center">
                      <Check size="18" />
                    </span>
                    {a4}
                  </ParagraphBase>
                )}
              </div>
              {(index === 4 || index === 11) && (
                <img
                  src="/bubble-gum-megaphone-in-the-browser-window 2.gif"
                  alt="Illustration"
                  className="mx-auto self-center w-96 h-96"
                />
              )}
            </div>
          ))}
        </div>

        <Button className="self-center">Calculer votre score</Button>
        <ParagraphBase className="mx-24">
          - Question 1: a) =4 point, b) = 3 points, c) = 2 points, d) = 1 points
          <br />- Question 2 à 20: a) = 1 points, b) = 2 points, c) = 3 points,
          d) = 4 point
        </ParagraphBase>

        <div>
          {" "}
          <Heading2 className="mx-24 text-ui-blue">Rappel</Heading2>
          <ParagraphBase className="mx-24 w-5/12 mt-4">
            N&apos;oubliez pas que ce quizz est basé sur des réponses
            subjectives et ne constitue pas une évaluation professionnelle. Il
            est essentiel de prendre en compte d&apos;autres facteurs et de
            consulter un professionnel si vous ressentez des problèmes
            significatifs liés à l&apos;estime de soi ou à l&apos;utilisation
            des réseaux sociaux.
          </ParagraphBase>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default withRouter(Quiz)

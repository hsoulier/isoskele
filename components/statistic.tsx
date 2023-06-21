import CardPodcast from "@/components/card-podcast"
import ChevronRight from "@/components/icons/chevron-right"
import { Heading2, Heading3, ParagraphBase } from "@/components/text"
import Link from "next/link"
import React from "react"

type Props = {}

const Statistic = (props: Props) => {
  return (
    <section className="mt-48 mx-24">
      <Heading2>Sommaire</Heading2>
      <div className="flex flex-col gap-2 mt-4">
        <Link
          scroll={false}
          className="flex gap-2 items-center"
          href="#les-ados-et-les-reseaux-sociaux"
        >
          <ChevronRight className="text-ui-black" size={20} />
          Les ados et les réseaux
        </Link>
        <Link
          scroll={false}
          className="flex gap-2 items-center"
          href="#les-ados-et-leurs-images-sur-les-reseaux"
        >
          <ChevronRight className="text-ui-black" size={20} />
          Les ados et leurs images sur les réseaux
        </Link>
        <Link
          scroll={false}
          className="flex gap-2 items-center"
          href="#les-reseaux-sociaux-nouvelle-drogue-chez-les-jeunes"
        >
          <ChevronRight className="text-ui-black" size={20} />
          Les réseaux sociaux nouvelle drogue chez les jeunes
        </Link>
        <Link scroll={false} className="flex gap-2 items-center" href="#">
          <ChevronRight className="text-ui-black" size={20} />
          Nos événements
        </Link>
      </div>

      <article className="pt-8" id="les-ados-et-les-reseaux-sociaux">
        <Heading2>Les ados et les réseaux sociaux</Heading2>
        <div className="flex items-center justify-between gap-20">
          <p className="font-bold text-[18vw] text-ui-blue">63%</p>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-5xl text-ui-blue">
              des 8 à 18 ans sont inscrits sur les réseaux sociaux
            </p>
            <p className="font-bold">(Audirep/Association e-Enfance, 2021)</p>
          </div>
        </div>
        <div className="flex gap-52 items-center">
          <div className="flex flex-col gap-6">
            <ParagraphBase>
              Dans le monde moderne d&apos;aujourd&apos;hui,{" "}
              <span className="text-ui-blue font-bold">
                les réseaux sociaux ont pris une place prépondérante dans la vie
                des jeunes âgés de 11 à 16 ans
              </span>
              . Que ce soit à travers des plateformes populaires comme Facebook,
              Instagram, Snapchat, ou encore TikTok, ces médias sociaux exercent
              une influence considérable sur la façon dont les jeunes
              interagissent, communiquent et perçoivent le monde qui les
              entoure.
            </ParagraphBase>
            <ParagraphBase>
              Les réseaux sociaux offrent une multitude d&apos;opportunités pour
              les jeunes, leur permettant de{" "}
              <span className="text-ui-blue font-bold">
                rester connectés avec leurs pairs, de partager des moments de
                leur vie quotidienne, d&apos;exprimer leurs opinions et de
                découvrir de nouvelles informations.
              </span>
              Cependant, cette immersion numérique a également des répercussions
              importantes sur leur développement{" "}
              <span className="text-ui-blue font-bold">
                socio-émotionnel, leur estime de soi, leur santé mentale et leur
                perception de la réalité.
              </span>
            </ParagraphBase>
            <ParagraphBase>
              Les réseaux sociaux offrent une multitude d&apos;opportunités pour
              les jeunes, leur permettant de rester connectés avec leurs pairs,
              de partager des moments de leur vie quotidienne, d&apos;exprimer
              leurs opinions et de découvrir de nouvelles informations.
              Cependant, cette immersion numérique a également des répercussions
              importantes sur leur développement socio-émotionnel, leur estime
              de soi, leur santé mentale et leur perception de la réalité.
            </ParagraphBase>
          </div>
          <div className="rounded-full h-96 w-96 bg-ui-violet-200 flex-shrink-0 overflow-visible">
            <img
              className="object-cover h-96 w-96 -scale-x-110 scale-y-110"
              src="/bubble-gum-selfie 1.gif"
            />
          </div>
        </div>
      </article>

      <article className="pt-8" id="les-ados-et-leurs-images-sur-les-reseaux">
        <Heading2>Les ados et leurs images sur les réseaux</Heading2>
        <ParagraphBase className="mt-11 w-[52%]">
          Les réseaux sociaux sont devenus une fenêtre incontournable à travers
          laquelle les adolescents âgés de 11 à 16 ans observent le monde qui
          les entoure et se construisent une identité virtuelle. Cependant,
          cette immersion numérique comporte des risques importants, notamment
          en{" "}
          <span className="text-ui-blue font-bold">
            ce qui concerne l&apos;image de soi des jeunes
          </span>
          . Les médias sociaux peuvent exercer une influence considérable sur{" "}
          <span className="text-ui-blue font-bold">
            la perception de leur corps, leur estime de soi et leur confiance en
            eux, souvent confrontés à des normes de beauté irréalistes et des
            pressions sociales constantes.
          </span>
        </ParagraphBase>
        <div className="flex items-center justify-between gap-20">
          <p className="font-bold text-[18vw] text-ui-turquoise">56%</p>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-5xl text-ui-turquoise">
              des français de 11 à 30 ans disent que Instagram influence leurs
              amours propre
            </p>
            <Link
              href="https://www.cbnews.fr/mobile/image-instagram-impacte-estime-soi-53-ses-utilisateurs-65706"
              className="font-bold underline"
            >
              Happydemics
            </Link>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-ui-violet-100 flex gap-8">
          <img
            src="/thumb-cyrus-north.png"
            alt="illustration"
            className="h-80"
          />
          <div className="flex flex-col gap-6">
            <Heading3>
              Le problème des filtres de beauté (notamment TikTok)
            </Heading3>
            <ParagraphBase>
              Dans la vidéo ci dessus, Cyrus North examine la question des
              filtres de beauté sur les médias sociaux, en particulier sur
              TikTok, et{" "}
              <span className="text-ui-blue font-bold">
                leur impact négatif potentiel sur l&apos;image de soi des
                utilisateurs
              </span>
              . L&apos;orateur note que si les filtres ne sont pas
              nécessairement nocifs avec modération, leur utilisation excessive
              peut être le signe de problèmes sous-jacents{" "}
              <span className="text-ui-blue font-bold">
                d&apos;estime de soi ou de dysmorphie corporelle.
              </span>
            </ParagraphBase>
            <ParagraphBase>
              <span className="text-ui-blue font-bold">
                La pression exercée par la société pour présenter une image
                irréprochable est l&apos;une des causes profondes de ce problème
              </span>
              , et Cyrus North pose la question de savoir si l&apos;accent doit
              être mis sur la réglementation des filtres ou sur la modification
              des attentes culturelles.
            </ParagraphBase>
          </div>
        </div>
      </article>

      <article
        className="pt-8 mb-14"
        id="les-reseaux-sociaux-nouvelle-drogue-chez-les-jeunes"
      >
        <Heading2>Les réseaux sociaux nouvelle drogue chez les jeunes</Heading2>
        <div className="flex gap-52 items-center mt-8">
          <div className="flex flex-col gap-6">
            <ParagraphBase>
              En effet, l&apos;utilisation{" "}
              <span className="text-ui-blue font-bold">
                excessive et compulsive des médias sociaux
              </span>
              peut présenter des similitudes avec les comportements addictifs
              liés aux substances toxiques. Les réseaux sociaux captivent
              l&apos;attention des jeunes, modifient leur comportement et{" "}
              <span className="text-ui-blue font-bold">
                peuvent entraîner une dépendance néfaste pour leur
                développement.
              </span>
            </ParagraphBase>
            <ParagraphBase>
              En effet, l&apos;utilisation excessive et compulsive des médias
              sociaux peut présenter des similitudes avec{" "}
              <span className="text-ui-blue font-bold">
                les comportements addictifs liés aux substances toxiques
              </span>
              . Les réseaux sociaux captivent l&apos;attention des jeunes,
              modifient leur comportement et peuvent entraîner une dépendance
              néfaste pour leur développement.
            </ParagraphBase>
          </div>
          <div className="h-96 w-96 flex-shrink-0 overflow-visible">
            <img
              className="object-cover h-96 w-96 -scale-x-110 scale-y-110"
              src="/bubble-gum-content-marketing.gif"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-20">
          <p className="font-bold text-[18vw] text-ui-blue">69%</p>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-5xl text-ui-blue">
              des ados de 11 à 30 ans passe 3H par jours sur les Réseaux sociaux
            </p>
            <Link
              href="https://www.cbnews.fr/mobile/image-instagram-impacte-estime-soi-53-ses-utilisateurs-65706"
              className="font-bold underline"
            >
              Happydemics
            </Link>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-ui-violet-100 flex gap-8">
          <img src="/leo-duff.png" alt="illustration" className="h-80" />
          <div className="flex flex-col gap-6">
            <Heading3>
              Comment TikTok a ba*sé le cerveau d’une génération.
            </Heading3>
            <ParagraphBase>
              La vidéo explique que la{" "}
              <span className="text-ui-blue font-bold">
                nature addictive de TikTok
              </span>{" "}
              est due à sa capacité à identifier les habitudes de consommation
              des utilisateurs et à s&apos;adapter pour leur fournir davantage
              de contenus qu&apos;ils apprécient. L&apos;application est conçue{" "}
              <span className="text-ui-blue font-bold">
                pour procurer une poussée de dopamine
              </span>{" "}
              qui entraîne un niveau élevé de satisfaction et de dépendance.
            </ParagraphBase>
            <ParagraphBase>
              Toutefois, cette dépendance peut avoir des conséquences négatives
              à long terme,{" "}
              <span className="text-ui-blue font-bold">
                notamment des difficultés de concentration, une baisse de la
                créativité et une diminution de la capacité à prendre des
                décisions intelligentes
              </span>
              . L&apos;orateur encourage les téléspectateurs à prendre le
              contrôle de leur dépendance et à se concentrer sur la reconquête
              de leur intelligence.
            </ParagraphBase>
          </div>
        </div>
      </article>

      <CardPodcast
        title="Sobriété • Adopter un numérique plus responsable !"
        description="Avant de vous donner quelques clés pour adopter un numérique plus responsable, j’avais quand-même envie de vous en dire un peu plus sur les enjeux environnementaux qui en découlent ..."
        bg="bg-ui-turquoise"
      />
    </section>
  )
}

export default Statistic

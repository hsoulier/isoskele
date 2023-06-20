import Instagram from "@/components/icons/instagram"
import Linkedin from "@/components/icons/linkedin"
import Logo from "@/components/logo"
import Link from "next/link"
import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="mx-8 md:mx-24 mt-44 mb-12 flex flex-col gap-8">
      <div className="flex-col md:flex-row flex justify-between items-center">
        <Logo />
        <nav className="flex-col md:flex-row inline-flex gap-8 md:gap-12 mr-24">
          <Link className="font-semibold text-xl" href="/sujet-etude">
            Sujets d&apos;études
          </Link>
          <Link className="font-semibold text-xl" href="/evenements">
            Evènements
          </Link>
          <Link className="font-semibold text-xl" href="/podcasts">
            Podcasts
          </Link>
          <Link className="font-semibold text-xl" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
      <hr className="border-ui-white" />
      <div className="flex justify-between items-center">
        <div className="inline-flex gap-2">
          <Linkedin className="text-ui-blue" size={20} />
          <Instagram className="text-ui-blue" size={20} />
        </div>
        <p>Copyright ©{new Date().getFullYear()} Sofos</p>
      </div>
    </footer>
  )
}

export default Footer

import Logo from "@/components/logo"
import Button from "@/components/ui/button"
import Link from "next/link"
import React from "react"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="mt-12 flex relative justify-between mx-32 items-end">
      <Logo />
      <nav className="absolute left-1/2 bottom-2 -translate-x-1/2 inline-flex gap-8">
        <Link href="/sujet-etude">Sujet d&apos;études</Link>
        <Link href="/evenements">Evènements</Link>
        <Link href="/podcasts">Podcasts</Link>
      </nav>
      <Button>Contact</Button>
    </header>
  )
}

export default Navbar

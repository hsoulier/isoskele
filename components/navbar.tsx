import Logo from "@/components/logo"
import Button from "@/components/ui/button"
import Link from "next/link"
import React from "react"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="mt-12 flex flex-col md:flex-row relative items-center md:justify-between mx-8 md:mx-32 md:items-end gap-4 md:gap-0">
      <Logo />
      <nav className="md:absolute left-1/2 bottom-2 md:-translate-x-1/2 inline-flex gap-4 md:gap-8">
        <Link href="/sujet-etude">Sujets d&apos;études</Link>
        <Link href="/evenements">Evènements</Link>
        <Link href="/podcasts">Podcasts</Link>
      </nav>
      <Button className="hidden md:block">Contact</Button>
    </header>
  )
}

export default Navbar

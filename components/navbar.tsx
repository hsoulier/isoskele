import Logo from "@/components/logo"
import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  black?: boolean
}

const Navbar = ({ black }: Props) => {
  const router = useRouter()
  return (
    <header className="pt-12 flex flex-col md:flex-row relative items-center md:justify-between mx-8 md:mx-32 gap-4 md:gap-0">
      <Logo className={black ? "text-ui-black" : ""} />
      <nav className="md:absolute left-1/2 bottom-2 md:-translate-x-1/2 inline-flex gap-4 md:gap-8">
        <Link className="font-bold" href="/sujet-etude/impact-sur-les-jeunes">
          Sujets d&apos;étude
        </Link>
        <Link className="font-bold" href="/evenements">
          Evènements
        </Link>
        <Link className="font-bold" href="/podcasts">
          Podcasts
        </Link>
        <Link className="font-bold" href="/formations">
          Formations
        </Link>
      </nav>
      <Button
        onClick={() => router.push("/entreprise")}
        className={cn("hidden md:block", black && "bg-ui-black")}
      >
        Vous êtes une entreprise
      </Button>
    </header>
  )
}

export default Navbar

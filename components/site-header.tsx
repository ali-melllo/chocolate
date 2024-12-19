
import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "./icons"

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-40 mx-auto w-11/12 rounded-[2em] border-b bg-[#0455fb] text-white shadow-xl md:w-8/12">

      <div className="flex h-16 w-full items-center justify-between px-5">
        <div className="flex gap-6 ">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block pt-1 text-base font-extrabold md:text-2xl">{siteConfig.name}</span>
          </Link>
        </div>

        <div className="flex w-4/12 items-center justify-center ">
          <Image
            alt={'oreo'}
            src={'/images/oreo/logo.png'}
            width={130}
            height={130}
          />
        </div>

        <div className="flex items-center justify-end md:space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
          <Link className="flex gap-2 text-xs font-bold md:gap-3 md:text-lg" type={'tel'} href={'09046329661'}>
            <Icons.PhoneCall className="size-4 md:size-6"/>
            تماس
          </Link>
        </div>
      </div>
    </header>
  )
}

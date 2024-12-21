'use client'

import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "./icons"

export function SiteHeader(props: { logo: string, color: string, fade: boolean }) {
  return (
    <header style={{ background: props.color }} className="sticky top-4 z-40 mx-auto w-11/12 rounded-[2em] border-b text-white shadow-xl transition-all duration-500 md:w-8/12">

      <div className="flex h-16 w-full items-center justify-between px-5">
        <div className="flex gap-6 ">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block pt-1 text-sm mr-3 font-extrabold md:text-2xl">{siteConfig.name}</span>
          </Link>
        </div>

        <div className="flex w-4/12 items-center justify-center">
          <Image
            className={`transition-all duration-200 ${props.fade ? "-translate-y-full opacity-0" : "opacity-100"}`}
            alt={'oreo'}
            src={props.logo}
            width={130}
            height={130}
            unoptimized
          />
        </div>

        <div className="flex items-center justify-end md:space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
          <Link className="flex gap-2 text-xs font-bold md:gap-3 md:text-lg" type={'tel'} href={'09046329661'}>
            <Icons.PhoneCall className="size-4 md:size-6" />
            تماس
          </Link>
        </div>
      </div>
    </header>
  )
}

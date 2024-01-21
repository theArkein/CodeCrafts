import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import CodeCraftsList from "./codecrafts"

export default function IndexPage() {
  return (
    <section className="container m-auto grid items-center gap-6 pb-8 pt-6 md:py-10 md:pt-32">
      <div className="m-auto flex max-w-[700px] flex-col items-center gap-2">
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Code Crafts
          <br className="hidden sm:inline" />
        </h1>
        <h3 className="text-center text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Delivering code crafted solutions to your problems.
        </h3>
        {/* <p className="m-auto max-w-[700px] text-center text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p> */}
      </div>
      <CodeCraftsList className="gap mt-5 flex flex-wrap items-stretch justify-center gap-6" />
      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
      <div className="mt-40 flex list-none justify-center gap-6 text-sm">
        <li className="text-muted-foreground hover:text-foreground">
          Request an app
        </li>
        <li className="text-muted-foreground hover:text-foreground">
          Contribute
        </li>
      </div>
    </section>
  )
}

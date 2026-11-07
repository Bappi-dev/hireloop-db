import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36">
      {/* Curved Globe Background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center">
        <div className="relative h-[480px] w-full max-w-6xl opacity-90 sm:h-[600px]">
          <Image
            src="/cta-bg.png"
            alt="Opportunities horizon"
            fill
            className="object-contain object-bottom"
            priority
          />
          {/* Subtle gradient blending */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md">
          <Sparkles className="size-3.5 text-indigo-400" />
          <span>START YOUR JOURNEY</span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
          Your next role is
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-white to-indigo-200 bg-clip-text text-transparent">
            waiting for you
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          Join over 15,000 professionals finding curated job opportunities and
          accelerating their careers on HireLoop.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants(),
              "h-11 rounded-xl bg-indigo-600 px-6 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-[0.98] gap-2 inline-flex items-center"
            )}
          >
            <span>Get Started Free</span>
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/jobs"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-xl border-red/10 text-white bg-gray/5 px-6 text-sm font-medium  backdrop-blur-sm hover:border-white/20 hover:bg-white/10 inline-flex items-center"
            )}
          >
            Browse All Jobs
          </Link>
        </div>
      </div>
    </section>
  )
}

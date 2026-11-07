"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"
import Imagehome from "@/app/assest/globe.png"

import { Button } from "@/components/ui/button"

const TRENDING_TAGS = [
  "Product Designer",
  "AI Engineering",
  "DevOps engineer",
]

export default function Banner() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[1000px] rounded-full bg-indigo-600/10 blur-[130px] dark:bg-indigo-600/15" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-16 pb-24 text-center sm:px-6 sm:pt-24 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm transition-all hover:border-white/20">
          <span className="flex size-2  rounded-full bg-amber-400" />
          <span className="text-zinc-300 font-bold">50,000+ NEW JOBS THIS MONTH</span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Find Your Dream <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Job Today</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role &mdash;
          faster.
        </p>

        {/* Search Bar Container */}
        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-card/60 p-2 shadow-2xl backdrop-blur-xl transition-all sm:rounded-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            {/* Job title / keyword */}
            <div className="flex flex-1 items-center gap-3 px-4 py-2">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            <div className="hidden h-6 w-px bg-border sm:block" />

            {/* Location */}
            <div className="flex flex-1 items-center gap-3 px-4 py-2">
              <MapPin className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="icon"
              className="size-11 shrink-0 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 sm:rounded-full"
            >
              <Search className="size-4" />
              <span className="sr-only">Search Jobs</span>
            </Button>
          </form>
        </div>

        {/* Trending Tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>Trending Position:</span>
          {TRENDING_TAGS.map((tag) => (
            <Link
              key={tag}
              href={`/jobs?q=${encodeURIComponent(tag)}`}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Hero Globe Visual & Stats */}
        <div className="relative mt-16 w-full max-w-4xl">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src={Imagehome}
              alt="Global opportunities"
              fill
              className="object-cover object-top opacity-90 transition-opacity hover:opacity-100"
              priority
            />
            {/* Gradient overlays to blend smoothly into page */}
          </div>

          <div className="relative -mt-12 sm:-mt-20">
            <p className="text-sm font-normal text-zinc-400 sm:text-base">
              Assisting over{" "}
              <span className="font-semibold text-white">15,000</span> job seekers
              find their dream positions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

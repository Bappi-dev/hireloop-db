import * as React from "react"
import Link from "next/link"
import { MapPin, Briefcase, ArrowRight, DollarSign } from "lucide-react"

interface Job {
  id: string
  title: string
  description: string
  location: string
  type: string
  salary: string
}

const FEATURED_JOBS: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-44k/Hour",
  },
  {
    id: "2",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-44k/Hour",
  },
  {
    id: "3",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-44k/Hour",
  },
  {
    id: "4",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-44k/Hour",
  },
  {
    id: "5",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-44k/Hour",
  },
  {
    id: "6",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-44k/Hour",
  },
]

export default function JobDiscovery() {
  return (
    <section className="relative w-full py-20 sm:py-28">
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[900px] rounded-full bg-indigo-600/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            <span className="size-1 rounded-full bg-indigo-400" />
            <span>SMART JOB DISCOVERY</span>
            <span className="size-1 rounded-full bg-indigo-400" />
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            The roles you&apos;d never
            <br />
            find by searching
          </h2>
        </div>

        {/* Job Grid (3 columns x 2 rows) */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {FEATURED_JOBS.map((job) => (
            <div
              key={job.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#12131b]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-[#161724] hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7"
            >
              <div>
                {/* Job Title */}
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                  {job.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed sm:text-sm">
                  {job.description}
                </p>

                {/* Meta details: Location & Work Mode */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-zinc-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="size-3.5 text-zinc-500" />
                    <span>{job.type}</span>
                  </div>
                </div>

                {/* Salary */}
                <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-zinc-300">
                  <DollarSign className="size-3.5 text-zinc-500" />
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Apply Now Action */}
              <div className="mt-6 pt-4">
                <Link
                  href={`/jobs/${job.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:text-white"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="size-3.5 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

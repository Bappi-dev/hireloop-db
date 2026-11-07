import * as React from "react"
import {
  Search,
  TrendingUp,
  Building2,
  Bookmark,
  Zap,
  FileText,
  Target,
  Rocket,
} from "lucide-react"

const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: TrendingUp,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites in your dashboard.",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Target,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: Rocket,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            <span className="size-1 rounded-full bg-indigo-400" />
            <span>FEATURES JOB</span>
            <span className="size-1 rounded-full bg-indigo-400" />
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight  sm:text-4xl md:text-5xl">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features 4x2 Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative flex items-start gap-4 rounded-2xl border border-white/5 bg-[#12131c]/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-[#161724] hover:shadow-lg hover:shadow-indigo-500/5 sm:p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                  <Icon className="size-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-indigo-200">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

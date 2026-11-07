import * as React from "react"
import { Briefcase, Building2, Users, Star } from "lucide-react"

const STATS = [
  {
    value: "50K",
    label: "Active Jobs",
    icon: Briefcase,
  },
  {
    value: "12K",
    label: "Companies",
    icon: Building2,
  },
  {
    value: "2M",
    label: "Job Seekers",
    icon: Users,
  },
  {
    value: "97%",
    label: "Satisfaction Rate",
    icon: Star,
  },
]

export default function StatsSection() {
  return (
    <section className="relative z-10 mx-auto -mt-6 w-full max-w-5xl px-4 sm:-mt-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#12131c]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#161724] hover:shadow-lg hover:shadow-indigo-500/5 sm:p-6"
            >
              {/* Subtle top corner icon */}
              <div className="flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-zinc-400 transition-colors group-hover:border-indigo-500/30 group-hover:text-indigo-400">
                  <Icon className="size-4" />
                </div>
              </div>

              {/* Number and Label */}
              <div className="mt-4">
                <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>

              {/* Subtle accent hover glow */}
              <div className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-300 group-hover:bg-green-500/15" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

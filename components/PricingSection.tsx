"use client"

import * as React from "react"
import Link from "next/link"
import { Crown, TrendingUp, Sparkles, Plus, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      icon: Crown,
      price: billingCycle === "monthly" ? "$0" : "$0",
      period: "/month",
      subtitle: "Start building your insights hub",
      isPopular: false,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      buttonText: "Choose This Plan",
      buttonVariant: "secondary" as const,
    },
    {
      name: "Growth",
      icon: TrendingUp,
      price: billingCycle === "monthly" ? "$17" : "$14",
      period: "/month",
      subtitle: "Start building your insights hub",
      isPopular: true,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      buttonText: "Choose This Plan",
      buttonVariant: "default" as const,
    },
    {
      name: "Premium",
      icon: Sparkles,
      price: billingCycle === "monthly" ? "$99" : "$79",
      period: "/month",
      subtitle: "Start building your insights hub",
      isPopular: false,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      buttonText: "Choose This Plan",
      buttonVariant: "secondary" as const,
    },
  ]

  return (
    <section className="relative w-full py-20 sm:py-28">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[800px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            <span className="size-1 rounded-full bg-indigo-400" />
            <span>PRICING</span>
            <span className="size-1 rounded-full bg-indigo-400" />
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight  sm:text-4xl md:text-5xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Billing Switcher (Monthly / Yearly) */}
          <div className="mt-8 flex items-center rounded-full border border-white/10 bg-[#12131c] p-1 shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "rounded-full px-5 py-1.5 text-xs font-medium transition-all duration-200",
                billingCycle === "monthly"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
                billingCycle === "yearly"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Yearly</span>
              <span className="rounded-full bg-pink-500/20 px-1.5 py-0.5 text-[10px] font-bold text-pink-400">
                20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl border p-7 backdrop-blur-md transition-all duration-300",
                  plan.isPopular
                    ? "border-indigo-500/50 bg-[#141522]/90 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/30"
                    : "border-white/10 bg-[#12131c]/70 hover:border-white/20 hover:bg-[#151624]"
                )}
              >
                <div>
                  {/* Top Row: Plan Name & Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-indigo-400" />
                      <span className="text-sm font-semibold text-white">
                        {plan.name}
                      </span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="text-3xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      <span className="ml-1 text-xs text-zinc-400">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-4 text-xs font-medium text-zinc-400">
                    {plan.subtitle}
                  </p>

                  <div className="my-6 h-px bg-white/5" />

                  {/* Features List */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <Plus className="size-3.5 shrink-0 text-zinc-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-4">
                  <Link
                    href="/sign-up"
                    className={cn(
                      buttonVariants({ variant: plan.buttonVariant }),
                      "h-10 w-full justify-center gap-2 rounded-xl text-xs font-medium transition-all duration-200",
                      plan.isPopular
                        ? "bg-white text-zinc-950 hover:bg-zinc-200 font-semibold shadow-md"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                    )}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

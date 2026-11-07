import * as React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0a0a0f] text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <div className="relative h-7 w-28">
                <Image
                  src="/logo.png"
                  alt="HireLoop"
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-3 max-w-sm text-xs text-zinc-400 leading-relaxed sm:text-sm">
              Connecting top-tier talent with ambitious companies worldwide.
              Find curated opportunities and accelerate your career.
            </p>
          </div>

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="hover:text-white transition-colors"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/salary-insights"
                  className="hover:text-white transition-colors"
                >
                  Salary Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link
                  href="/resume-builder"
                  className="hover:text-white transition-colors"
                >
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Career Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>
          <p className="text-zinc-500">
            Crafted for modern teams and ambitious professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}

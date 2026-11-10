"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Briefcase, Building2, CreditCard, LogIn, ArrowRight, ArrowLeftFromLine } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { authClient } from "@/lib/auth-client"
import { ThemeToggle } from "@/components/ThemeToggle"



export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const { data: session } = authClient.useSession()
  console.log(session);

  const NAV_LINKS = [
  { name: "Browse Jobs", href: "/jobs", icon: Briefcase },
  { name: "Company", href: "/company", icon: Building2 },
  { name: "Pricing", href: "/pricing", icon: CreditCard },
  { name: "Dashboard", href: `/dashboard/${session?.user?.role || 'seeker'}`, icon: CreditCard },
]

  
  const handleSignOut = () =>{
     authClient.signOut()
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="HireLoop Home"
          >
            <div className="relative h-8 w-32 sm:w-36">
              <Image
                src="/logo.png"
                alt="HireLoop"
                fill
                priority
                sizes="(max-width: 640px) 128px, 144px"
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-orange-300",
                  isActive
                    ? "font-semibold text-orange-300"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Right: Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          { session?.user ? <><span className="text-orange-500">Welcome, {session?.user.name}</span> 
               <Button onClick={handleSignOut} variant={"link"} className=" cursor-pointer hover:bg-red-500 text-white" ><ArrowLeftFromLine /> SingOut</Button>
           </> : <>
             <Link
            href="/sign-in"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ size: "default" }),
              "h-9 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/35 active:scale-[0.98]"
            )}
          >
            Get Started
          </Link>
            </>
          }
        </div>

        {/* Mobile: Hamburger Drawer Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-8 rounded-lg bg-indigo-600 px-3 text-xs font-medium text-white shadow-sm shadow-indigo-500/20 hover:bg-indigo-500"
            )}
          >
            Get Started
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 rounded-lg text-muted-foreground hover:text-foreground"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              }
            />

            <SheetContent side="right" className="flex w-80 flex-col p-6 sm:w-96">
              <SheetHeader className="p-0 text-left">
                <SheetTitle className="sr-only">HireLoop Menu</SheetTitle>
                <div className="relative h-7 w-28">
                  <Image
                    src="/logo.png"
                    alt="HireLoop"
                    fill
                    sizes="112px"
                    className="object-contain object-left"
                  />
                </div>
              </SheetHeader>

              <div className="mt-6 flex flex-1 flex-col justify-between">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-1">
                  <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Navigation
                  </p>
                  {NAV_LINKS.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-accent text-red-500"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-red-500"
                        )}
                      >
                        <Icon className="size-4 shrink-0 text-muted-foreground" />
                        <span>{link.name}</span>
                      </Link>
                    )
                  })}
                </div>

                {/* Mobile Bottom Actions */}
                <div className="space-y-4 pt-6">
                  <Separator />

                  <div className="flex flex-col gap-2.5">
                    <Link
                      href="/sign-in"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full justify-center gap-2"
                      )}
                    >
                      <LogIn className="size-4" />
                      <span>Sign In</span>
                    </Link>

                    <Link
                      href="/sign-up"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        buttonVariants(),
                        "w-full justify-center gap-2 rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-500/25 hover:bg-indigo-500"
                      )}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5">
                    <span className="text-xs font-medium text-muted-foreground">
                      Switch Mode
                    </span>
                    <ThemeToggle />
                  </div>

                  <p className="text-center text-xs text-muted-foreground">
                    Find top talent and curated opportunities.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

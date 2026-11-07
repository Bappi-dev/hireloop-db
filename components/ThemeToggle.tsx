"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "relative size-9 rounded-lg border border-border/40 bg-background/50 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
      aria-label="Toggle theme"
      title="Toggle dark / light mode"
    >
      <Sun className="size-4 text-amber-400 transition-all duration-300 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 text-indigo-500 transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

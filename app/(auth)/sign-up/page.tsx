"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Loader2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/components/ui/toast"

const ROLES = [
  {
    id: "seeker" as const,
    label: "seeker",
    description: "Looking for jobs",
    icon: User,
  },
  {
    id: "recruiter" as const,
    label: "recruiter",
    description: "Hiring talent",
    icon: Briefcase,
  },
  {
    id: "admin" as const,
    label: "admin",
    description: "Platform admin",
    icon: ShieldCheck,
  },
]

type UserRole = (typeof ROLES)[number]["id"]

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = React.useState<{
    name: string
    email: string
    password: string
    confirmPassword: string
    role: UserRole
  }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:  "Seeker" 
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formError, setFormError] = React.useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (formError) setFormError(null)
  }

  const handleRoleSelect = (role: UserRole) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError(null)

    if (formData.password !== formData.confirmPassword) {
      const errorMsg = "Passwords do not match."
      setFormError(errorMsg)
      toast.add({
        title: "Validation Error",
        description: errorMsg,
        type: "error",
      })
      return
    }

    if (formData.password.length < 8) {
      const errorMsg = "Password must be at least 8 characters long."
      setFormError(errorMsg)
      toast.add({
        title: "Validation Error",
        description: errorMsg,
        type: "error",
      })
      return
    }

    try {
      setIsLoading(true)
      console.log("Submitting Sign Up Data to Better Auth:", formData)

      const { data, error } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role, 
        callbackURL: "/",
      })

      if (data) {
        console.log("Sign up successful:", data)
        toast.add({
          title: "Account Created!",
          description: `Welcome to HireLoop as a ${formData.role}!`,
          type: "success",
        })
        router.push("/")
      }

      if (error) {
        console.error("Sign up error:", error)
        const message = error.message || "Failed to create account"
        setFormError(message)
        toast.add({
          title: "Sign Up Failed",
          description: message,
          type: "error",
        })
      }
    } catch (err: unknown) {
      console.error("Unexpected error:", err)
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred"
      setFormError(message)
      toast.add({
        title: "Error",
        description: message,
        type: "error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    try {
      console.log("Initiating Google Sign Up...")
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      })
    } catch (err: unknown) {
      console.error("Google sign up error:", err)
      toast.add({
        title: "Google Sign-In Error",
        description: "Failed to authenticate with Google.",
        type: "error",
      })
    }
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[800px] rounded-full bg-indigo-600/10 blur-[130px] dark:bg-indigo-600/15" />
      </div>

      <div className="w-full max-w-lg">
        <Card className="border border-white/10 bg-card/80 shadow-2xl backdrop-blur-xl">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto flex justify-center">
              <Link
                href="/"
                className="inline-block transition-opacity hover:opacity-90"
              >
                <div className="relative h-8 w-32">
                  <Image
                    src="/logo.png"
                    alt="HireLoop"
                    fill
                    priority
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
              Create an account
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Get started with HireLoop to discover great opportunities
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Social Google Sign-Up */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              className="h-10 w-full justify-center gap-2.5 rounded-lg border-white/10 bg-white/5 font-medium transition-colors hover:bg-white/10"
            >
              <svg className="size-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign up with Google</span>
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <Separator className="w-full" />
              <span className="absolute bg-card px-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                Or continue with email
              </span>
            </div>

            {/* Error Message Alert */}
            {formError && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs font-medium text-red-400">
                {formError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection Option */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-foreground">
                  I want to join as
                </Label>
                <div
                  className="grid grid-cols-3 gap-2 sm:gap-2.5"
                  role="radiogroup"
                  aria-label="Account role"
                >
                  {ROLES.map((role) => {
                    const Icon = role.icon
                    const isSelected = formData.role === role.id
                    return (
                      <button
                        key={role.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => handleRoleSelect(role.id)}
                        className={cn(
                          "relative flex flex-col items-center justify-center rounded-xl border p-3 text-center transition-all duration-200 outline-none select-none",
                          isSelected
                            ? "border-indigo-500 bg-indigo-500/15 text-white shadow-sm shadow-indigo-500/25 ring-2 ring-indigo-500/50"
                            : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/10 hover:text-foreground"
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-5 transition-colors",
                            isSelected
                              ? "text-indigo-400"
                              : "text-muted-foreground"
                          )}
                        />
                        <span className="mt-1.5 text-xs font-semibold leading-tight">
                          {role.label}
                        </span>
                        <span className="mt-0.5 line-clamp-1 text-[10px] text-muted-foreground">
                          {role.description}
                        </span>
                        {isSelected && (
                          <span className="absolute top-1.5 right-1.5 flex size-2 rounded-full bg-indigo-500" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-xs font-medium text-foreground"
                >
                  Full Name
                </Label>
                <div className="relative">
                  <User className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-10 rounded-lg pl-9 text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-xs font-medium text-foreground"
                >
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="h-10 rounded-lg pl-9 text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="password"
                  className="text-xs font-medium text-foreground"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 8 characters"
                    className="h-10 rounded-lg pr-10 pl-9 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="confirmPassword"
                  className="text-xs font-medium text-foreground"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="h-10 rounded-lg pr-10 pl-9 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="h-10 w-full justify-center gap-2 rounded-lg bg-indigo-600 font-medium text-white shadow-md shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-[0.99] disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account as {formData.role}</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>

          {/* Toggle between Sign-Up and Sign-In */}
          <CardFooter className="flex justify-center border-t border-white/5 py-4 text-center">
            <p className="text-xs text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

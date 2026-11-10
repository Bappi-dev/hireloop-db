"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Search,
  FileText,
  Bookmark,
  FileEdit,
  MessageSquare,
  Settings,
  PlusCircle,
  Briefcase,
  Users,
  Building2,
  BarChart3,
  LogOut,
  type LucideIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"

export type UserRole = "seeker" | "recruiter" | "admin"

export interface MenuItem {
  name: string
  url: string
  icon: LucideIcon
}

export type MenuItemsByRole = Record<UserRole, MenuItem[]>

export const menuItemsByRole: MenuItemsByRole = {
  seeker: [
    {
      name: "Overview",
      url: "/dashboard/seeker",
      icon: LayoutDashboard,
    },
    {
      name: "Find Jobs",
      url: "/jobs",
      icon: Search,
    },
    {
      name: "My Applications",
      url: "/dashboard/seeker/applications",
      icon: FileText,
    },
    {
      name: "Saved Jobs",
      url: "/dashboard/seeker/saved",
      icon: Bookmark,
    },
    {
      name: "Resume Builder",
      url: "/dashboard/seeker/resume",
      icon: FileEdit,
    },
    {
      name: "Messages",
      url: "/dashboard/seeker/messages",
      icon: MessageSquare,
    },
    {
      name: "Settings",
      url: "/dashboard/seeker/settings",
      icon: Settings,
    },
  ],
  recruiter: [
    {
      name: "Dashboard",
      url: "/dashboard/recruiter",
      icon: LayoutDashboard,
    },
    {
      name: "Manage jobs",
      url: "/dashboard/recruiter/jobs",
      icon: PlusCircle,
    },
    {
      name: "Add jobs",
      url: "/dashboard/recruiter/jobs/new",
      icon: PlusCircle,
    },
    {
      name: "Applications",
      url: "/dashboard/recruiter/jobs",
      icon: Briefcase,
    },
 
    {
      name: "Settings",
      url: "/dashboard/recruiter/settings",
      icon: Settings,
    },
  ],
  admin: [
    {
      name: "Overview",
      url: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      name: "Manage Jobs",
      url: "/dashboard/admin/jobs",
      icon: Briefcase,
    },
    {
      name: "Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      name: "Analytics",
      url: "/dashboard/admin/analytics",
      icon: BarChart3,
    },
    {
      name: "Platform Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const { data: session } = authClient.useSession()

  // Normalize role to lowercase ("seeker" | "recruiter" | "admin")
  const rawRole = (session?.user?.role || "seeker").toLowerCase()
  const role: UserRole = (rawRole in menuItemsByRole ? rawRole : "seeker") as UserRole

  const currentMenuItems = menuItemsByRole[role] || []

  return (
    <Sidebar collapsible="icon" className="border-r border-border/40 bg-sidebar">
      <SidebarHeader className="border-b border-border/40 p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-7 w-28">
            <Image
              src="/logo.png"
              alt="HireLoop"
              fill
              priority
              sizes="112px"
              className="object-contain object-left"
            />
          </div>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
            {role} Portal
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarMenu>
            {currentMenuItems.map((item) => {
              const isActive = pathname === item.url
              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={isActive}
                    tooltip={item.name}
                  >
                    <item.icon />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-3">
        {session?.user ? (
          <div className="flex items-center justify-between gap-2 px-1 py-1.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">
                {session.user.name || "User"}
              </p>
              <p className="truncate text-[10px] text-muted-foreground">
                {session.user.email}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => {
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      window.location.href = "/"
                    },
                  },
                })
              }}
              title="Sign Out"
              className="text-muted-foreground hover:text-destructive"
            >
              <LogOut className="size-3.5" />
              <span className="sr-only">Sign Out</span>
            </Button>
          </div>
        ) : (
          <div className="px-1 py-1">
            <Link
              href="/sign-in"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <LogOut className="size-3.5" />
              <span>Sign In</span>
            </Link>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}

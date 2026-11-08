import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { authClient } from "@/lib/auth-client"
import { Plus } from "lucide-react"

const menuItemsByRole = {
  seeker: [],
  recruiter: [],
  admin: [],
}

export function DashboardSidebar() {
  const { data: session } = authClient.useSession()
  const role = session?.user?.role || "seeker"

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup>
          <SidebarMenu>
            {
              // menuItemsByRole[role].map((item) => (
              //   <SidebarMenuItem key={project.name}>
              //     <SidebarMenuButton render={<a href={project.url} />}>
              //       <item.icon />
              //       <span>{item.name}</span>
              //     </SidebarMenuButton>
              //   </SidebarMenuItem>
              // ))
            }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

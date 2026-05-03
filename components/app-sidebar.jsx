"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import LogoutButton from "@/components/dashboard/LogoutButton"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, FolderIcon, UsersIcon, FileTextIcon, Settings2Icon, LifeBuoyIcon, ShoppingBagIcon, CommandIcon, TicketIcon, MessageSquareIcon, ReceiptIcon, UserCogIcon, UserRoundIcon, CalendarIcon, BookA, WalletCards, Handshake, KanbanSquare } from "lucide-react"

export function AppSidebar({
  role,
  user,
  ...props
}) {
  const normalizedRole = typeof role === "string" ? role.toLowerCase() : "client"

  const roleHomePath =
    normalizedRole === "admin"
      ? "/dashboard/admin"
      : normalizedRole === "employee"
        ? "/dashboard/employee"
        : "/dashboard/client"

  const projectsPath =
    normalizedRole === "admin"
      ? "/dashboard/admin/projects"
      : normalizedRole === "employee"
        ? "/dashboard/employee/projects"
        : "/dashboard/client/projects"

  const navMain = [
    {
      title: "Dashboard",
      url: roleHomePath,
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Projects",
      url: projectsPath,
      icon: <FolderIcon />,
    },
    {
      title: "Kanban",
      url: "/dashboard/kanban",
      icon: <KanbanSquare />,
    },
    {
      title: "Messages",
      url: "/dashboard/messages",
      icon: <MessageSquareIcon />,
    },
    {
      title: "Tickets",
      url: "/dashboard/tickets",
      icon: <TicketIcon />,
    },
    {
      title: "Marketplace",
      url: "/dashboard/marketplace",
      icon: <ShoppingBagIcon />,
    },
     {
      title: "Schedule",
      url: "/schedule",
      icon: <CalendarIcon />,
    },
  ]

  if (normalizedRole === "admin") {
    navMain.push(
      {
        title: "Manage Users",
        url: "/dashboard/admin/users",
        icon: <UserCogIcon />,
      },
      {
        title: "Leads",
        url: "/dashboard/admin/leads",
        icon: <FileTextIcon />,
      },
      {
        title: "Clients",
        url: "/dashboard/admin/clients",
        icon: <UsersIcon />,
      },
      {
        title: "Billing",
        url: "/dashboard/admin/billing",
        icon: <ReceiptIcon />,
      },
      {
      title: "Quotation",
      url: "/dashboard/admin/quotation",
      icon: <BookA />,
    },
    {
      title: "Contract",
      url: "/dashboard/admin/contracts",
      icon: <Handshake />,
    },
    {
      title: "Employee Contracts",
      url: "/dashboard/admin/employee-contracts",
      icon: <Handshake />,
    },
    {
      title: "Payment",
      url: "/dashboard/admin/payment",
      icon: <WalletCards />,
    },
    )
  }

  if (normalizedRole === "client") {
    navMain.push({
      title: "Billing",
      url: "/dashboard/client/billing",
      icon: <ReceiptIcon />,
    },
    {
      title: "Contracts",
      url: "/dashboard/client/contracts",
      icon: <Handshake />,
    },
    {
      title: "Payments",
      url: "/dashboard/client/payment",
      icon: <WalletCards />,
    },
     {
      title: "Quotations",
      url: "/dashboard/client/quotations",
      icon: <BookA />,
    }
  )
  }

  if (normalizedRole === "employee") {
    navMain.push({
      title: "Contracts",
      url: "/dashboard/employee/contracts",
      icon: <Handshake />,
    }
  )
  }

  const navSecondary = [
    // {
    //   title: "Profile",
    //   url: roleHomePath,
    //   icon: <UserRoundIcon />,
    // },
    // {
    //   title: "Settings",
    //   url: roleHomePath,
    //   icon: <Settings2Icon />,
    // },
    // {
    //   title: "Get Help",
    //   url: "/contact-us",
    //   icon: <LifeBuoyIcon />,
    // },
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-2! h-auto"
            >
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/logo2 copy.png"
                  alt="Cyberspace Works"
                  className="size-12 shrink-0 object-contain group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-9"
                />
                <span className="text-base font-semibold group-data-[collapsible=icon]:hidden">
                  Cyberspace Works
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user?.name || "User",
            email: user?.email || "",
            avatar: user?.avatar || "/logo2.png",
          }}
        />
        <div className="px-2 pb-2 group-data-[collapsible=icon]:px-0">
          <LogoutButton className="w-full justify-center group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:px-0" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

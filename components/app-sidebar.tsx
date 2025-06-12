import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Logo from "@/public/images/Screenshot 2025-01-27 at 12.09.01 AM.png";

import { ChartColumnIncreasing, ShoppingCart, LogOut } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Products",
    url: "/",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: ShoppingCart,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon color="#d7cc00" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <LogOut color="#d7cc00" />
                <span>Sign Out</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}

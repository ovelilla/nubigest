"use client";
// Components
import { FullscreenToggle } from "@/components/fullscreen-toggle/fullscreen-toggle.component";
import { LocaleSwitcher } from "@/components/locale-switcher/locale-switcher.component";
import {
  ProtectedLayout,
  ProtectedLayoutContainer,
  ProtectedLayoutSidebar,
  ProtectedLayoutHeader,
  ProtectedLayoutMain,
} from "@/app/[locale]/(protected)/layouts/protected/protected.layout";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher.component";
import { UserNav } from "@/components/user-nav/user-nav.component";
import { UserLayoutProps } from "./types/user.layout.types";

const UserLayout = ({ children, session }: UserLayoutProps) => (
  <ProtectedLayout>
    <ProtectedLayoutSidebar>sidebar content</ProtectedLayoutSidebar>
    <ProtectedLayoutContainer>
      <ProtectedLayoutHeader>
        <LocaleSwitcher />
        <SidebarTrigger />
        <FullscreenToggle />
        <ThemeSwitcher />
        <UserNav session={session} />
      </ProtectedLayoutHeader>
      <ProtectedLayoutMain>{children}</ProtectedLayoutMain>
    </ProtectedLayoutContainer>
  </ProtectedLayout>
);

export { UserLayout };

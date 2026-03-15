"use client";
// Vendors
import { useState } from "react";
// Components
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar, SidebarRail } from "@/components/ui/sidebar";
// Types
import {
  ProtectedLayoutProps,
  ProtectedLayoutContainerProps,
  ProtectedLayoutSidebarProps,
  ProtectedLayoutHeaderProps,
  ProtectedLayoutMainProps,
} from "./types/protected.types";

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <SidebarProvider defaultOpen={true} open={open} onOpenChange={setOpen}>
      <div className="flex w-full flex-1">{children}</div>
    </SidebarProvider>
  );
};

const ProtectedLayoutContainer = ({
  children,
}: ProtectedLayoutContainerProps) => {
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden">
      {children}
    </div>
  );
};

const ProtectedLayoutSidebar = ({ children }: ProtectedLayoutSidebarProps) => {
  return (
    <Sidebar collapsible="icon">
      {children}
      <SidebarRail />
    </Sidebar>
  );
};

const ProtectedLayoutHeader = ({ children }: ProtectedLayoutHeaderProps) => {
  return (
    <header className="bg-background flex h-14 shrink-0 items-center justify-end border-b px-2 sm:h-16 sm:px-4">
      <div className="flex gap-2">{children}</div>
    </header>
  );
};

const ProtectedLayoutMain = ({ children }: ProtectedLayoutMainProps) => {
  return (
    <main className="bg-background flex flex-1 overflow-hidden">
      {children}
    </main>
  );
};

export {
  ProtectedLayout,
  ProtectedLayoutContainer,
  ProtectedLayoutSidebar,
  ProtectedLayoutHeader,
  ProtectedLayoutMain,
};

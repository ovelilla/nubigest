"use client";
// Vendors
import { useState } from "react";
// Components
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "./components/sidebar/sidebar.component";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ToggleTheme } from "@/components/toggle-theme/toggle-theme.component";
import { UserNav } from "./components/user-nav/user-nav";
// Types
import { DashboardProps } from "./types/dashboard.types";

const DashboardLayout = ({ children, session }: DashboardProps) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <SidebarProvider defaultOpen={true} open={open} onOpenChange={setOpen}>
      <div className="flex w-full flex-1">
        <Sidebar open={open} session={session} />

        <div className="flex w-full flex-1 flex-col overflow-hidden">
          <header className="bg-background flex h-14 shrink-0 items-center justify-end border-b px-2 sm:h-16 sm:px-4">
            <div className="flex gap-2">
              <SidebarTrigger />
              <ToggleTheme />
              <UserNav session={session} />
            </div>
          </header>

          <main className="bg-background flex flex-1 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export { DashboardLayout };

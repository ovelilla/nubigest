"use client";
// Vendors
import { useEffect, useState } from "react";
// Auth
import { authClient } from "@/lib/auth-client";
// Components
import { Sidebar, SidebarProvider, SidebarRail } from "@/components/ui/sidebar";
// Constants
import { BROADCAST_CHANNEL_NAME } from "@/constants/broadcast-channels.constants";
// Hooks
import { useDirection } from "@/components/ui/direction";
// i18n
import { useRouter } from "@/i18n/navigation";
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
  const router = useRouter();

  useEffect(() => {
    const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
    channel.onmessage = async (event: MessageEvent<{ type: string }>) => {
      if (event.data?.type === "account-deleted") {
        await authClient.signOut();
        router.replace("/signin");
      }
    };
    return () => channel.close();
  }, [router]);

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
  const direction = useDirection();
  const side = direction === "rtl" ? "right" : "left";

  return (
    <Sidebar collapsible="icon" side={side} dir={direction}>
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

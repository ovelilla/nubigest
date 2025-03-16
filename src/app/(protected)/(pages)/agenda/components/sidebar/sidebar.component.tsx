"use client";

// Vendors
import { es } from "react-day-picker/locale";
// Components
import { Calendar } from "@/components/ui/calendar";
// Hooks
import { SidebarHook } from "./hooks/sidebar.hook";
// Libs
import { cn } from "@/lib/utils";
// Types
import type { SidebarProps } from "./types/sidebar.component.types";

const Sidebar = ({
  calendarRef,
  openSidebar,
  setOpenSidebar,
}: SidebarProps) => {
  const { handleContentClick, handleDateSelect, handleOverlayClick } =
    SidebarHook({
      calendarRef,
      setOpenSidebar,
    });

  return (
    <div
      className={cn(
        "absolute inset-0 z-50 h-full overflow-hidden bg-black/40 xl:static xl:bg-transparent",
        "transition-opacity duration-300 ease-in-out",
        openSidebar
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          "bg-background absolute top-0 left-0 flex h-full w-72 flex-col gap-2 py-4 xl:relative xl:border-r",
          "transition-margin-left duration-300 ease-in-out",
          openSidebar ? "ml-0" : "ml-[-288px]",
        )}
        onClick={handleContentClick}
      >
        <Calendar locale={es} mode="single" onSelect={handleDateSelect} />
      </div>
    </div>
  );
};

export { Sidebar };

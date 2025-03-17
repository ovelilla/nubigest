// Types
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type SidebarProps = {
  calendarRef: RefObject<FullCalendar | null>;
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

export type { SidebarProps };

// Types
import type { Dispatch, SetStateAction } from "react";
import type { SidebarHandlersReturn } from "../../handlers/types/sidebar.handlers.types";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type SidebarHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

type SidebarHookReturn = SidebarHandlersReturn;

export type { SidebarHookProps, SidebarHookReturn };

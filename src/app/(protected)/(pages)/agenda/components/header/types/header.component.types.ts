// Types
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type HeaderProps = {
  calendarRef: RefObject<FullCalendar | null>;
  openSearchBar: boolean;
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  setShowWeekends: Dispatch<SetStateAction<boolean>>;
  setSlotDuration: Dispatch<SetStateAction<string>>;
  showWeekends: boolean;
  slotDuration: string;
};

export type { HeaderProps };

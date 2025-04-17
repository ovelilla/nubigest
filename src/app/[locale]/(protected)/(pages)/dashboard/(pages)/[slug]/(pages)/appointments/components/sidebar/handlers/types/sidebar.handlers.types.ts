// Types
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type SidebarHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

type SidebarHandlersReturn = {
  handleContentClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  handleDateSelect: (date?: Date) => void;
  handleOverlayClick: () => void;
};

type ContentClickHandlerProps = {
  event: React.MouseEvent<HTMLDivElement, MouseEvent>;
};

type DateSelectHandlerProps = {
  calendarRef: RefObject<FullCalendar | null>;
  date?: Date;
};

type OverlayClickHandlerProps = Pick<SidebarHandlersProps, "setOpenSidebar">;

export type {
  ContentClickHandlerProps,
  DateSelectHandlerProps,
  OverlayClickHandlerProps,
  SidebarHandlersProps,
  SidebarHandlersReturn,
};

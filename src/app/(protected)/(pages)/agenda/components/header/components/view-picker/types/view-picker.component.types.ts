// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type ViewPickerProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

export type { ViewPickerProps };

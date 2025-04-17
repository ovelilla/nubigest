// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type TodayButtonProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

export type { TodayButtonProps };

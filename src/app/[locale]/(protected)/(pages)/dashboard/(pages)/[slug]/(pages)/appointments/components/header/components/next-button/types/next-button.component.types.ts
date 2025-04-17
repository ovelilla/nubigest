// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type NextButtonProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

export type { NextButtonProps };

// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type Year = {
  label: number;
  value: number;
};

type YearPickerProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

export type { Year, YearPickerProps };

// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type Month = {
  label: string;
  value: number;
};

type MonthPickerProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

export type { Month, MonthPickerProps };

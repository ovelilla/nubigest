// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type YearPickerHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type YearPickerHandlersReturn = {
  handleYearChange: (year: number) => void;
};

type YearChangeHandlerProps = Pick<YearPickerHandlersProps, "calendarRef"> & {
  year: number;
};

export type {
  YearPickerHandlersProps,
  YearPickerHandlersReturn,
  YearChangeHandlerProps,
};

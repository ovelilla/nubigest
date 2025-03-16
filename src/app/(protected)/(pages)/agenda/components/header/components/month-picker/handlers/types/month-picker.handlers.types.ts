// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type MonthPickerHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type MonthPickerHandlersReturn = {
  handleMonthChange: (month: number) => void;
};

type MonthChangeHandlerProps = Pick<MonthPickerHandlersProps, "calendarRef"> & {
  month: number;
};

export type {
  MonthPickerHandlersProps,
  MonthPickerHandlersReturn,
  MonthChangeHandlerProps,
};

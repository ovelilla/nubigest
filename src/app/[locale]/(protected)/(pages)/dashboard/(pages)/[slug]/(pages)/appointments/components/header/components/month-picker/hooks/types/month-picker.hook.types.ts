// Types
import type { Month } from "../../types/month-picker.component.types";
import type { MonthPickerHandlersReturn } from "../../handlers/types/month-picker.handlers.types";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type MonthPickerHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type MonthPickerHookReturn = MonthPickerHandlersReturn & {
  currentMonth: number | null;
  months: Month[];
};

export type { MonthPickerHookProps, MonthPickerHookReturn };

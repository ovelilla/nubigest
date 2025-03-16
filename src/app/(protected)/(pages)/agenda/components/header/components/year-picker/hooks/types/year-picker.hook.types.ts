// Types
import type { RefObject } from "react";
import type { Year } from "../../types/year-picker.component.types";
import type { YearPickerHandlersReturn } from "../../handlers/types/year-picker.handlers.types";
import type FullCalendar from "@fullcalendar/react";

type YearPickerHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type YearPickerHookReturn = YearPickerHandlersReturn & {
  currentYear: number | null;
  years: Year[];
};

export type { YearPickerHookProps, YearPickerHookReturn };

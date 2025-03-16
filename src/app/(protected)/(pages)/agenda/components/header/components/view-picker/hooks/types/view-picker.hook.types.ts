// Types
import type { ViewPickerHandlersReturn } from "../../handlers/types/view-picker.handlers.types";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type ViewPickerHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type ViewPickerHookReturn = ViewPickerHandlersReturn & {
  viewType: string | null;
};

export type { ViewPickerHookProps, ViewPickerHookReturn };

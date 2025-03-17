// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type ViewPickerHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type ViewPickerHandlersReturn = {
  handleViewChange: (value: string) => void;
};

type ViewChangeHandlerProps = Pick<ViewPickerHandlersProps, "calendarRef"> & {
  value: string;
};

export type {
  ViewPickerHandlersProps,
  ViewPickerHandlersReturn,
  ViewChangeHandlerProps,
};

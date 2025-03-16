// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type NextButtonHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type NextButtonHandlersReturn = {
  handleNextButtonClick: () => void;
};

type NextButtonClickHandlerProps = Pick<NextButtonHandlersProps, "calendarRef">;

export type {
  NextButtonHandlersProps,
  NextButtonHandlersReturn,
  NextButtonClickHandlerProps,
};

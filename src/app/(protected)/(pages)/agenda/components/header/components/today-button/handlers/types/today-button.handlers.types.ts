// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type TodayButtonHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type TodayButtonHandlersReturn = {
  handleTodayButtonClick: () => void;
};

type TodayButtonClickHandlerProps = Pick<
  TodayButtonHandlersProps,
  "calendarRef"
>;

export type {
  TodayButtonHandlersProps,
  TodayButtonHandlersReturn,
  TodayButtonClickHandlerProps,
};

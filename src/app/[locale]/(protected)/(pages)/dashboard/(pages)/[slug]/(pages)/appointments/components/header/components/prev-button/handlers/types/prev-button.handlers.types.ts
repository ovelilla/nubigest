// Types
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type PrevButtonHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type PrevButtonHandlersReturn = {
  handlePrevButtonClick: () => void;
};

type PrevButtonClickHandlerProps = Pick<PrevButtonHandlersProps, "calendarRef">;

export type {
  PrevButtonHandlersProps,
  PrevButtonHandlersReturn,
  PrevButtonClickHandlerProps,
};

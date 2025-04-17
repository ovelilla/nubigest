// Types
import type { RefObject } from "react";
import type { TodayButtonHandlersReturn } from "../../handlers/types/today-button.handlers.types";
import type FullCalendar from "@fullcalendar/react";

type TodayButtonHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type TodayButtonHookReturn = TodayButtonHandlersReturn;

export type { TodayButtonHookProps, TodayButtonHookReturn };

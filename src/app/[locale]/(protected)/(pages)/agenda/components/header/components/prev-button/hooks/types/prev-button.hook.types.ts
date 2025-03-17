// Types
import type { PrevButtonHandlersReturn } from "../../handlers/types/prev-button.handlers.types";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type PrevButtonHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type PrevButtonHookReturn = PrevButtonHandlersReturn;

export type { PrevButtonHookProps, PrevButtonHookReturn };

// Types
import type { NextButtonHandlersReturn } from "../../handlers/types/next-button.handlers.types";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type NextButtonHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type NextButtonHookReturn = NextButtonHandlersReturn;

export type { NextButtonHookProps, NextButtonHookReturn };

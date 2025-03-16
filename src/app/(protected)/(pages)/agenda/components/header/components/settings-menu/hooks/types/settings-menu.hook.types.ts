// Types
import type { Dispatch, SetStateAction } from "react";
import type { Month, Year } from "../../types/settings-menu.component.types";
import type { SettingsMenuHandlersReturn } from "../../handlers/types/settings-menu.handlers.types";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type SettingsMenuHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
  setSlotDuration: Dispatch<SetStateAction<string>>;
};

type SettingsMenuHookReturn = SettingsMenuHandlersReturn & {
  currentMonth: number | null;
  currentYear: number | null;
  months: Month[];
  viewType: string | null;
  years: Year[];
};

export type { SettingsMenuHookProps, SettingsMenuHookReturn };

// Types
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type Month = {
  label: string;
  value: number;
};

type SettingsMenuProps = {
  calendarRef: RefObject<FullCalendar | null>;
  setShowWeekends: Dispatch<SetStateAction<boolean>>;
  setSlotDuration: Dispatch<SetStateAction<string>>;
  showWeekends: boolean;
  slotDuration: string;
};

type Year = {
  label: number;
  value: number;
};

export type { Month, SettingsMenuProps, Year };

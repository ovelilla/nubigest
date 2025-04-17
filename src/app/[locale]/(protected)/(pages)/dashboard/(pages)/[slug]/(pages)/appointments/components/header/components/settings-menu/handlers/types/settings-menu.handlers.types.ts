// Types
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type SettingsMenuHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
  setSlotDuration: Dispatch<SetStateAction<string>>;
};

type SettingsMenuHandlersReturn = {
  handleMonthChange: (month: number) => void;
  handleSlotDurationChange: (value: string) => void;
  handleViewChange: (value: string) => void;
  handleYearChange: (year: number) => void;
};

type MonthChangeHandlerProps = Pick<
  SettingsMenuHandlersProps,
  "calendarRef"
> & {
  month: number;
};

type SlotDurationChangeHandlerProps = Pick<
  SettingsMenuHandlersProps,
  "setSlotDuration"
> & {
  value: string;
};

type ViewChangeHandlerProps = Pick<SettingsMenuHandlersProps, "calendarRef"> & {
  value: string;
};

type YearChangeHandlerProps = Pick<SettingsMenuHandlersProps, "calendarRef"> & {
  year: number;
};

export type {
  MonthChangeHandlerProps,
  SettingsMenuHandlersProps,
  SettingsMenuHandlersReturn,
  SlotDurationChangeHandlerProps,
  ViewChangeHandlerProps,
  YearChangeHandlerProps,
};

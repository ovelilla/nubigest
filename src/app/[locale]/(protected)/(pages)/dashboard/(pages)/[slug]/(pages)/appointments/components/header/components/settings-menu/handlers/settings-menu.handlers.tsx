// Vendors
import { setMonth, setYear } from "date-fns";
// Types
import type {
  MonthChangeHandlerProps,
  SettingsMenuHandlersProps,
  SettingsMenuHandlersReturn,
  SlotDurationChangeHandlerProps,
  ViewChangeHandlerProps,
  YearChangeHandlerProps,
} from "./types/settings-menu.handlers.types";

const monthChangeHandler = ({
  calendarRef,
  month,
}: MonthChangeHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  if (!calendarApi) {
    return;
  }
  calendarApi.gotoDate(setMonth(calendarApi.getDate(), month));
};

const slotDurationChangeHandler = ({
  setSlotDuration,
  value,
}: SlotDurationChangeHandlerProps): void => {
  setSlotDuration(value);
};

const viewChangeHandler = ({
  calendarRef,
  value,
}: ViewChangeHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.changeView(value);
};

const yearChangeHandler = ({
  calendarRef,
  year,
}: YearChangeHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  if (!calendarApi) {
    return;
  }
  calendarApi.gotoDate(setYear(calendarApi.getDate(), year));
};

const SettingsMenuHandlers = ({
  calendarRef,
  setSlotDuration,
}: SettingsMenuHandlersProps): SettingsMenuHandlersReturn => {
  return {
    handleMonthChange: (month) => monthChangeHandler({ calendarRef, month }),
    handleSlotDurationChange: (value) =>
      slotDurationChangeHandler({ setSlotDuration, value }),
    handleViewChange: (value) => viewChangeHandler({ calendarRef, value }),
    handleYearChange: (year) => yearChangeHandler({ calendarRef, year }),
  };
};

export { SettingsMenuHandlers };

// Vendors
import { setMonth } from "date-fns";
// Types
import type {
  MonthPickerHandlersProps,
  MonthPickerHandlersReturn,
  MonthChangeHandlerProps,
} from "./types/month-picker.handlers.types";

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

const MonthPickerHandlers = ({
  calendarRef,
}: MonthPickerHandlersProps): MonthPickerHandlersReturn => {
  return {
    handleMonthChange: (month) => monthChangeHandler({ calendarRef, month }),
  };
};

export { MonthPickerHandlers };

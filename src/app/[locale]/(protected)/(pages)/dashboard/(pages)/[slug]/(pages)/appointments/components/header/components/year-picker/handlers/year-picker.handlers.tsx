// Vendors
import { setYear } from "date-fns";
// Types
import type {
  YearPickerHandlersProps,
  YearPickerHandlersReturn,
  YearChangeHandlerProps,
} from "./types/year-picker.handlers.types";

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

const YearPickerHandlers = ({
  calendarRef,
}: YearPickerHandlersProps): YearPickerHandlersReturn => {
  return {
    handleYearChange: (year) => yearChangeHandler({ calendarRef, year }),
  };
};

export { YearPickerHandlers };

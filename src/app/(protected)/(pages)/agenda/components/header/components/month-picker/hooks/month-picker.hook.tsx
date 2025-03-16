// Handlers
import { MonthPickerHandlers } from "../handlers/month-picker.handlers";
// Types
import type {
  MonthPickerHookProps,
  MonthPickerHookReturn,
} from "./types/month-picker.hook.types";
// Utils
import { getMonths } from "../utils/month-picker.utils";

const MonthPickerHook = ({
  calendarRef,
}: MonthPickerHookProps): MonthPickerHookReturn => {
  const calendarApi = calendarRef.current?.getApi() ?? null;
  const currentMonth = calendarApi?.getDate().getMonth() ?? null;
  const months = getMonths();

  const { handleMonthChange } = MonthPickerHandlers({
    calendarRef,
  });

  return {
    currentMonth,
    handleMonthChange,
    months,
  };
};

export { MonthPickerHook };

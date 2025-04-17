// Handlers
import { YearPickerHandlers } from "../handlers/year-picker.handlers";
// Types
import type {
  YearPickerHookProps,
  YearPickerHookReturn,
} from "./types/year-picker.hook.types";
// Utils
import { getYears } from "../utils/year-picker.utils";

const YearPickerHook = ({
  calendarRef,
}: YearPickerHookProps): YearPickerHookReturn => {
  const calendarApi = calendarRef.current?.getApi() ?? null;
  const currentYear = calendarApi?.getDate().getFullYear() ?? null;
  const years = getYears(currentYear);

  const { handleYearChange } = YearPickerHandlers({
    calendarRef,
  });

  return {
    currentYear,
    handleYearChange,
    years,
  };
};

export { YearPickerHook };

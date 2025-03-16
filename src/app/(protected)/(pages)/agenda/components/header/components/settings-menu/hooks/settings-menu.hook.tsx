// Handlers
import { SettingsMenuHandlers } from "../handlers/settings-menu.handlers";
// Types
import type {
  SettingsMenuHookProps,
  SettingsMenuHookReturn,
} from "./types/settings-menu.hook.types";
// Utils
import { getMonths, getYears } from "../utils/settings-menu.utils";

const SettingsMenuHook = ({
  calendarRef,
  setSlotDuration,
}: SettingsMenuHookProps): SettingsMenuHookReturn => {
  const calendarApi = calendarRef.current?.getApi() ?? null;

  const currentMonth = calendarApi?.getDate().getMonth() ?? null;
  const currentYear = calendarApi?.getDate().getFullYear() ?? null;

  const months = getMonths();
  const years = getYears(currentYear);

  const viewType = calendarApi?.view?.type ?? null;

  const {
    handleMonthChange,
    handleSlotDurationChange,
    handleViewChange,
    handleYearChange,
  } = SettingsMenuHandlers({
    calendarRef,
    setSlotDuration,
  });

  return {
    currentMonth,
    currentYear,
    handleMonthChange,
    handleSlotDurationChange,
    handleViewChange,
    handleYearChange,
    months,
    viewType,
    years,
  };
};

export { SettingsMenuHook };

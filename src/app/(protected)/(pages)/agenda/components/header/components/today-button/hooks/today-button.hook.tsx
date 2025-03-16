// Handlers
import { TodayButtonHandlers } from "../handlers/today-button.handlers";
// Types
import type {
  TodayButtonHookProps,
  TodayButtonHookReturn,
} from "./types/today-button.hook.types";

const TodayButtonHook = ({
  calendarRef,
}: TodayButtonHookProps): TodayButtonHookReturn => {
  const { handleTodayButtonClick } = TodayButtonHandlers({
    calendarRef,
  });

  return {
    handleTodayButtonClick,
  };
};

export { TodayButtonHook };

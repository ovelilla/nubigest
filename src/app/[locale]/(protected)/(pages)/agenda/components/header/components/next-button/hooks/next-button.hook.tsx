// Handlers
import { NextButtonHandlers } from "../handlers/next-button.handlers";
// Types
import type {
  NextButtonHookProps,
  NextButtonHookReturn,
} from "./types/next-button.hook.types";

const NextButtonHook = ({
  calendarRef,
}: NextButtonHookProps): NextButtonHookReturn => {
  const { handleNextButtonClick } = NextButtonHandlers({
    calendarRef,
  });

  return {
    handleNextButtonClick,
  };
};

export { NextButtonHook };

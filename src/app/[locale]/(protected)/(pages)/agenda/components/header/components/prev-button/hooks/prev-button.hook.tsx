// Handlers
import { PrevButtonHandlers } from "../handlers/prev-button.handlers";
// Types
import type {
  PrevButtonHookProps,
  PrevButtonHookReturn,
} from "./types/prev-button.hook.types";

const PrevButtonHook = ({
  calendarRef,
}: PrevButtonHookProps): PrevButtonHookReturn => {
  const { handlePrevButtonClick } = PrevButtonHandlers({
    calendarRef,
  });

  return {
    handlePrevButtonClick,
  };
};

export { PrevButtonHook };

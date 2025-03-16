// Types
import type {
  PrevButtonHandlersProps,
  PrevButtonHandlersReturn,
  PrevButtonClickHandlerProps,
} from "./types/prev-button.handlers.types";

const prevButtonClickHandler = ({
  calendarRef,
}: PrevButtonClickHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.prev();
};

const PrevButtonHandlers = ({
  calendarRef,
}: PrevButtonHandlersProps): PrevButtonHandlersReturn => {
  return {
    handlePrevButtonClick: () => prevButtonClickHandler({ calendarRef }),
  };
};

export { PrevButtonHandlers };

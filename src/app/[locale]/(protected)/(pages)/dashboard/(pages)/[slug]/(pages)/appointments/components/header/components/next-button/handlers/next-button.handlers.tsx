// Types
import type {
  NextButtonHandlersProps,
  NextButtonHandlersReturn,
  NextButtonClickHandlerProps,
} from "./types/next-button.handlers.types";

const nextButtonClickHandler = ({
  calendarRef,
}: NextButtonClickHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.next();
};

const NextButtonHandlers = ({
  calendarRef,
}: NextButtonHandlersProps): NextButtonHandlersReturn => {
  return {
    handleNextButtonClick: () => nextButtonClickHandler({ calendarRef }),
  };
};

export { NextButtonHandlers };

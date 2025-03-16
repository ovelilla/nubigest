// Types
import type {
  TodayButtonHandlersProps,
  TodayButtonHandlersReturn,
  TodayButtonClickHandlerProps,
} from "./types/today-button.handlers.types";

const todayButtonClickHandler = ({
  calendarRef,
}: TodayButtonClickHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.today();
};

const TodayButtonHandlers = ({
  calendarRef,
}: TodayButtonHandlersProps): TodayButtonHandlersReturn => {
  return {
    handleTodayButtonClick: () => todayButtonClickHandler({ calendarRef }),
  };
};

export { TodayButtonHandlers };

// Types
import type {
  ViewPickerHandlersProps,
  ViewPickerHandlersReturn,
  ViewChangeHandlerProps,
} from "./types/view-picker.handlers.types";

const viewChangeHandler = ({
  calendarRef,
  value,
}: ViewChangeHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.changeView(value);
};

const ViewPickerHandlers = ({
  calendarRef,
}: ViewPickerHandlersProps): ViewPickerHandlersReturn => {
  return {
    handleViewChange: (value) => viewChangeHandler({ calendarRef, value }),
  };
};

export { ViewPickerHandlers };

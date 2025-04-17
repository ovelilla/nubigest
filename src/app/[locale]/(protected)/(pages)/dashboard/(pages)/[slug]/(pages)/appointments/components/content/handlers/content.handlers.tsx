// Types
import type {
  ContentHandlersProps,
  ContentHandlersReturn,
  DateSelectHandlerProps,
  DatesSetHandlerProps,
} from "./types/content.handlers.types";

const dateSelectHandler = ({
  arg,
  appointmentForm,
  setOpenDialog,
}: DateSelectHandlerProps): void => {
  appointmentForm.setValue("start", arg.start);
  appointmentForm.setValue("end", arg.end);
  setOpenDialog(true);
};

const datesSetHandler = ({
  dateInfo,
  setDatesState,
}: DatesSetHandlerProps): void => {
  setDatesState(dateInfo);
};

const ContentHandlers = ({
  appointmentForm,
  setDatesState,
  setOpenDialog,
}: ContentHandlersProps): ContentHandlersReturn => {
  return {
    handleDatesSet: (dateInfo) => datesSetHandler({ dateInfo, setDatesState }),
    handleDateSelect: (arg) =>
      dateSelectHandler({ arg, appointmentForm, setOpenDialog }),
  };
};

export { ContentHandlers };

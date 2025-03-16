// Actions
// Types
import type {
  DialogHandlersProps,
  DialogHandlersReturn,
  EndDateSelectHandlerProps,
  StartDateSelectHandlerProps,
  SubmitHandlerProps,
} from "./types/dialog.handlers.types";
import type { AppointmentSchema } from "../../../schemas/types/appointment.schema.types";

const endDateSelectHandler = ({
  date,
  form,
}: EndDateSelectHandlerProps): void => {
  if (date) {
    form.setValue("end", date);
  }
};

const startDateSelectHandler = ({
  date,
  form,
}: StartDateSelectHandlerProps): void => {
  if (date) {
    form.setValue("start", date);
  }
};

const submitHandler = async ({
  // form,
  // setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  console.log("submitHandler", values);
};

const DialogHandlers = ({
  form,
  setLoading,
}: DialogHandlersProps): DialogHandlersReturn => {
  return {
    handleEndDateSelect: (date: Date) => endDateSelectHandler({ date, form }),
    handleStartDateSelect: (date: Date) =>
      startDateSelectHandler({ date, form }),
    handleSubmit: (values: AppointmentSchema) =>
      submitHandler({
        form,
        setLoading,
        values,
      }),
  };
};

export { DialogHandlers };

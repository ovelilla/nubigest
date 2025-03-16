// Types
import type { AppointmentSchema } from "@/app/(protected)/(pages)/agenda/schemas/types/appointment.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type DialogHandlersProps = {
  form: UseFormReturn<AppointmentSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type DialogHandlersReturn = {
  handleEndDateSelect: (date: Date) => void;
  handleStartDateSelect: (date: Date) => void;
  handleSubmit: (values: AppointmentSchema) => void;
};

type EndDateSelectHandlerProps = Pick<DialogHandlersProps, "form"> & {
  date: Date;
};

type StartDateSelectHandlerProps = Pick<DialogHandlersProps, "form"> & {
  date: Date;
};

type SubmitHandlerProps = DialogHandlersProps & {
  values: AppointmentSchema;
};

export type {
  DialogHandlersProps,
  DialogHandlersReturn,
  EndDateSelectHandlerProps,
  StartDateSelectHandlerProps,
  SubmitHandlerProps,
};

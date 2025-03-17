// Vendors
import type { AppointmentSchema } from "@/app/[locale]/(protected)/(pages)/agenda/schemas/types/appointment.schema.types";
import type { DatesSetArg, DateSelectArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type ContentHandlersProps = {
  appointmentForm: UseFormReturn<AppointmentSchema>;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

type ContentHandlersReturn = {
  handleDateSelect: (arg: DateSelectArg) => void;
  handleDatesSet: (dateInfo: DatesSetArg) => void;
};

type DateSelectHandlerProps = Pick<
  ContentHandlersProps,
  "setOpenDialog" | "appointmentForm"
> & {
  arg: DateSelectArg;
};

type DatesSetHandlerProps = Pick<ContentHandlersProps, "setDatesState"> & {
  dateInfo: DatesSetArg;
};

export type {
  ContentHandlersProps,
  ContentHandlersReturn,
  DateSelectHandlerProps,
  DatesSetHandlerProps,
};

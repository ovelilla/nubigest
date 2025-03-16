// Vendors
import type { AppointmentSchema } from "@/app/(protected)/(pages)/agenda/schemas/types/appointment.schema.types";
import type { ContentHandlersReturn } from "../../handlers/types/content.handlers.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type ContentHookProps = {
  appointmentForm: UseFormReturn<AppointmentSchema>;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

type ContentHookReturn = ContentHandlersReturn;

export type { ContentHookProps, ContentHookReturn };

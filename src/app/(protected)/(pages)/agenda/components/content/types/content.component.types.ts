// Vendors
import type { AppointmentSchema } from "@/app/(protected)/(pages)/agenda/schemas/types/appointment.schema.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type { UseFormReturn } from "react-hook-form";
import type FullCalendar from "@fullcalendar/react";

type ContentProps = {
  calendarRef: RefObject<FullCalendar | null>;
  appointmentForm: UseFormReturn<AppointmentSchema>;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  showWeekends: boolean;
  slotDuration: string;
};

export type { ContentProps };

// Types
import type { AppointmentSchema } from "@/app/[locale]/(protected)/(pages)/dashboard/(pages)/[slug]/(pages)/appointments/schemas/types/appointment.schema.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type { UseFormReturn } from "react-hook-form";
import type FullCalendar from "@fullcalendar/react";

type AppointmentsHookReturn = {
  appointmentForm: UseFormReturn<AppointmentSchema>;
  calendarRef: RefObject<FullCalendar | null>;
  datesState: DatesSetArg | null;
  openDialog: boolean;
  openSearchBar: boolean;
  openSidebar: boolean;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  setShowWeekends: Dispatch<SetStateAction<boolean>>;
  setSlotDuration: Dispatch<SetStateAction<string>>;
  showWeekends: boolean;
  slotDuration: string;
};

export type { AppointmentsHookReturn };

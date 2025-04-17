// Vendors
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/appointments.constants";
// Schemas
import { appointmentSchema } from "../schemas/appointment.schema";
// Types
import type { AppointmentsHookReturn } from "./types/appointments.hook.types";
import type { AppointmentSchema } from "../schemas/types/appointment.schema.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type FullCalendar from "@fullcalendar/react";

const AppointmentsHook = (): AppointmentsHookReturn => {
  const [datesState, setDatesState] = useState<DatesSetArg | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [showWeekends, setShowWeekends] = useState<boolean>(true);
  const [slotDuration, setSlotDuration] = useState("00:10:00");

  const calendarRef = useRef<FullCalendar | null>(null);

  const appointmentForm = useForm<AppointmentSchema>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: DEFAULT_VALUES,
  });

  return {
    appointmentForm,
    calendarRef,
    datesState,
    openDialog,
    openSearchBar,
    openSidebar,
    setDatesState,
    setOpenDialog,
    setOpenSearchBar,
    setOpenSidebar,
    setShowWeekends,
    setSlotDuration,
    showWeekends,
    slotDuration,
  };
};

export { AppointmentsHook };

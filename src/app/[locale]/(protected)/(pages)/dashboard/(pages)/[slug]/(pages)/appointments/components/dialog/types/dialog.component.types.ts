// Vendors
import type { AppointmentSchema } from "@/app/[locale]/(protected)/(pages)/dashboard/(pages)/[slug]/(pages)/appointments/schemas/types/appointment.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type DialogProps = {
  form: UseFormReturn<AppointmentSchema>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type { DialogProps };

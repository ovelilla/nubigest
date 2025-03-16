// Types
import type { AppointmentSchema } from "@/app/(protected)/(pages)/agenda/schemas/types/appointment.schema.types";
import type { DialogHandlersReturn } from "../../handlers/types/dialog.handlers.types";
import type { UseFormReturn } from "react-hook-form";

type DialogHookProps = {
  form: UseFormReturn<AppointmentSchema>;
};

type DialogHookReturn = DialogHandlersReturn & {
  loading: boolean;
};

export type { DialogHookProps, DialogHookReturn };

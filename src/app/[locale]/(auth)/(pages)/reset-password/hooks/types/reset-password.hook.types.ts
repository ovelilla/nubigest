// Types
import type { ResetPasswordHandlersReturn } from "../../handlers/types/reset-password.handlers.types";
import type { ResetPasswordSchema } from "../../schemas/types/reset-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type ResetPasswordHookReturn = ResetPasswordHandlersReturn & {
  form: UseFormReturn<ResetPasswordSchema>;
  loading: boolean;
  showPassword: boolean;
  t: (arg: string) => string;
};

export type { ResetPasswordHookReturn };

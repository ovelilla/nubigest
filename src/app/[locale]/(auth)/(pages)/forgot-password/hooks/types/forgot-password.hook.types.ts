// Types
import type { ForgotPasswordHandlersReturn } from "../../handlers/types/forgot-password.handlers.types";
import type { ForgotPasswordSchema } from "../../schemas/types/forgot-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type ForgotPasswordHookReturn = ForgotPasswordHandlersReturn & {
  form: UseFormReturn<ForgotPasswordSchema>;
  loading: boolean;
  t: (arg: string) => string;
};

export type { ForgotPasswordHookReturn };

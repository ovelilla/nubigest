// Types
import type { Dispatch, SetStateAction } from "react";
import type { ResetPasswordSchema } from "../../schemas/types/reset-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type ResetPasswordHandlersProps = {
  form: UseFormReturn<ResetPasswordSchema>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  t: (arg: string) => string;
  token: string | null;
};

type ResetPasswordHandlersReturn = {
  handleSubmit: (values: ResetPasswordSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type SubmitHandlerProps = Pick<
  ResetPasswordHandlersProps,
  "form" | "setLoading" | "t" | "token"
> & {
  values: ResetPasswordSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  ResetPasswordHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};

// Types
import type { Dispatch, SetStateAction } from "react";
import type { ForgotPasswordSchema } from "../../schemas/types/forgot-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type ForgotPasswordHandlersProps = {
  form: UseFormReturn<ForgotPasswordSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  t: (arg: string) => string;
};

type ForgotPasswordHandlersReturn = {
  handleSubmit: (values: ForgotPasswordSchema) => void;
};

type SubmitHandlerProps = Pick<
  ForgotPasswordHandlersProps,
  "form" | "setLoading" | "t"
> & {
  values: ForgotPasswordSchema;
};

export type {
  ForgotPasswordHandlersProps,
  ForgotPasswordHandlersReturn,
  SubmitHandlerProps,
};

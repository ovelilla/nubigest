// Types
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { ForgotPasswordSchema } from "../../schemas/types/forgot-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type ForgotPasswordHandlersProps = {
  form: UseFormReturn<ForgotPasswordSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tForgotPassword: _Translator;
  tErrors: _Translator;
};

type ForgotPasswordHandlersReturn = {
  handleSubmit: (values: ForgotPasswordSchema) => void;
};

type HandleSubmit = (props: {
  form: UseFormReturn<ForgotPasswordSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tForgotPassword: _Translator;
  tErrors: _Translator;
  values: ForgotPasswordSchema;
}) => Promise<void>;

export type {
  ForgotPasswordHandlersProps,
  ForgotPasswordHandlersReturn,
  HandleSubmit,
};

// Types
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { ResetPasswordSchema } from "../../schemas/types/reset-password.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { useRouter } from "@/i18n/navigation";

type ResetPasswordHandlersProps = {
  form: UseFormReturn<ResetPasswordSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tResetPassword: _Translator;
  token: string | undefined;
};

type ResetPasswordHandlersReturn = {
  handleSubmit: (values: ResetPasswordSchema) => void;
};

type SubmitHandler = (props: {
  form: UseFormReturn<ResetPasswordSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tResetPassword: _Translator;
  token: string | undefined;
  values: ResetPasswordSchema;
}) => Promise<void>;

export type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  SubmitHandler,
};

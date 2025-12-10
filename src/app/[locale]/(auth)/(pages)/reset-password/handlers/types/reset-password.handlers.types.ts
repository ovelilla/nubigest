// Types
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { ResetPasswordSchema } from "../../schemas/types/reset-password.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { useRouter } from "@/i18n/navigation";

type ResetPasswordHandlersProps = {
  form: UseFormReturn<ResetPasswordSchema>;
  router: ReturnType<typeof useRouter>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  tAuth: _Translator;
  tResetPassword: _Translator;
  token: string | undefined;
};

type ResetPasswordHandlersReturn = {
  handleSubmit: (values: ResetPasswordSchema) => void;
  handleToggleShowPassword: VoidFunction;
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

type ToggleShowPasswordHandler = (props: {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
}) => void;

export type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  SubmitHandler,
  ToggleShowPasswordHandler,
};

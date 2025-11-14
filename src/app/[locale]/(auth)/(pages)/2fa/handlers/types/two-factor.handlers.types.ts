// Types
import type { Dispatch, SetStateAction } from "react";
import type { TwoFactorSchema } from "../../schemas/types/two-factor.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";

type SignInHandlersProps = {
  form: UseFormReturn<TwoFactorSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tTwoFactor: _Translator;
};

type SignInHandlersReturn = {
  handleSubmit: (values: TwoFactorSchema) => void;
};

type SubmitHandlerProps = {
  form: UseFormReturn<TwoFactorSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tTwoFactor: _Translator;
  values: TwoFactorSchema;
};

export type { SignInHandlersProps, SignInHandlersReturn, SubmitHandlerProps };

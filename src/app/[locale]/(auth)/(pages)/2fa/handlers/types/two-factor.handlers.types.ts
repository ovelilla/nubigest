// Types
import type { Dispatch, SetStateAction } from "react";
import type { SignInSchema } from "../../schemas/types/two-factor.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";

type SignInHandlersProps = {
  form: UseFormReturn<SignInSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tTwoFactor: _Translator;
};

type SignInHandlersReturn = {
  handleSubmit: (values: SignInSchema) => void;
};

type SubmitHandlerProps = {
  form: UseFormReturn<SignInSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tTwoFactor: _Translator;
  values: SignInSchema;
};

export type { SignInHandlersProps, SignInHandlersReturn, SubmitHandlerProps };

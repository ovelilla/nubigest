// Vendors
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { LoadingState } from "../../hooks/types/signup.hook.types";
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SignUpHandlersProps = {
  form: UseFormReturn<SignUpSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tErrors: _Translator;
  tSignUp: _Translator;
};

type SignUpHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handleSubmit: (values: SignUpSchema) => void;
};

type HandleOAuthClickProps = {
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  provider: string;
  tErrors: _Translator;
  tSignUp: _Translator;
};

type HandleSubmitProps = {
  form: UseFormReturn<SignUpSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tErrors: _Translator;
  tSignUp: _Translator;
  values: SignUpSchema;
};

export type {
  HandleOAuthClickProps,
  SignUpHandlersProps,
  SignUpHandlersReturn,
  HandleSubmitProps,
};

// Vendors
import type { Dispatch, SetStateAction } from "react";
import type { LoadingState } from "../../hooks/types/signup.hook.types";
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";

type SignUpHandlersProps = {
  form: UseFormReturn<SignUpSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  tAuth: _Translator;
  tSignUp: _Translator;
};

type SignUpHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handleSubmit: (values: SignUpSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type OAuthClickHandlerProps = {
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  provider: string;
  tAuth: _Translator;
  tSignUp: _Translator;
};

type SubmitHandlerProps = {
  form: UseFormReturn<SignUpSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tAuth: _Translator;
  tSignUp: _Translator;
  values: SignUpSchema;
};

type ToggleShowPasswordHandlerProps = {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
};

export type {
  OAuthClickHandlerProps,
  SignUpHandlersProps,
  SignUpHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};

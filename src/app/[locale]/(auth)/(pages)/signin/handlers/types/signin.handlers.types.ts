// Types
import type { Dispatch, SetStateAction } from "react";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { LoadingState } from "../../hooks/types/signin.hook.types";
import type { _Translator } from "next-intl";

type SignInHandlersProps = {
  form: UseFormReturn<SignInSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  tAuth: _Translator;
  tSignIn: _Translator;
};

type SignInHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handleSubmit: (values: SignInSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type OAuthClickHandlerProps = {
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  provider: string;
  tAuth: _Translator;
  tSignIn: _Translator;
};

type SubmitHandlerProps = {
  form: UseFormReturn<SignInSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tAuth: _Translator;
  tSignIn: _Translator;
  values: SignInSchema;
};

type ToggleShowPasswordHandlerProps = {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
};

export type {
  OAuthClickHandlerProps,
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};

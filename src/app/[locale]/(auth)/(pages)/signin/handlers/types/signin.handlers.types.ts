// Types
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { LoadingState } from "../../hooks/types/signin.hook.types";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { useRouter } from "@/i18n/navigation";

type SignInHandlersProps = {
  form: UseFormReturn<SignInSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tAuth: _Translator;
  tSignIn: _Translator;
};

type SignInHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handleSubmit: (values: SignInSchema) => void;
};

type OAuthClickHandlerProps = {
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  provider: string;
  tAuth: _Translator;
  tSignIn: _Translator;
};

type SubmitHandlerProps = {
  form: UseFormReturn<SignInSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tAuth: _Translator;
  tSignIn: _Translator;
  values: SignInSchema;
};

export type {
  OAuthClickHandlerProps,
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
};

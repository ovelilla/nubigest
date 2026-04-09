// Types
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { LoadingState } from "../../hooks/types/use-signin.hook.types";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { useRouter } from "@/i18n/navigation";

type HandleOAuthClick = (props: {
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  provider: string;
  tErrors: _Translator;
  tSignIn: _Translator;
}) => Promise<void>;

type HandlePasskeyClick = (props: {
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tSignIn: _Translator;
}) => Promise<void>;

type HandleSubmit = (props: {
  form: UseFormReturn<SignInSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tErrors: _Translator;
  tSignIn: _Translator;
  values: SignInSchema;
}) => Promise<void>;

type SignInHandlersProps = {
  form: UseFormReturn<SignInSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  tErrors: _Translator;
  tSignIn: _Translator;
};

type SignInHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handlePasskeyClick: () => void;
  handleSubmit: (values: SignInSchema) => void;
};

export type {
  HandleOAuthClick,
  HandlePasskeyClick,
  HandleSubmit,
  SignInHandlersProps,
  SignInHandlersReturn,
};

// Types
import type { Dispatch, SetStateAction } from "react";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { useRouter } from "@/i18n/navigation";
import type { LoadingState } from "../../hooks/types/signin.hook.types";

type SignInHandlersProps = {
  form: UseFormReturn<SignInSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setShowTwoFactor: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  t: (arg: string) => string;
};

type SignInHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handleSubmit: (values: SignInSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type OAuthClickHandlerProps = Pick<SignInHandlersProps, "setLoading" | "t"> & {
  provider: string;
};

type SubmitHandlerProps = Pick<
  SignInHandlersProps,
  "form" | "router" | "setLoading" | "setShowTwoFactor" | "t"
> & {
  values: SignInSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  SignInHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  OAuthClickHandlerProps,
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};

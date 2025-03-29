// Vendors
import type { Dispatch, SetStateAction } from "react";
import type { LoadingState } from "../../hooks/types/signup.hook.types";
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SignUpHandlersProps = {
  form: UseFormReturn<SignUpSchema>;
  setLoading: Dispatch<SetStateAction<LoadingState>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  t: (arg: string) => string;
};

type SignUpHandlersReturn = {
  handleOAuthClick: (provider: string) => void;
  handleSubmit: (values: SignUpSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type OAuthClickHandlerProps = Pick<SignUpHandlersProps, "setLoading" | "t"> & {
  provider: string;
};

type SubmitHandlerProps = Pick<
  SignUpHandlersProps,
  "form" | "setLoading" | "t"
> & {
  values: SignUpSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  SignUpHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  OAuthClickHandlerProps,
  SignUpHandlersProps,
  SignUpHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};

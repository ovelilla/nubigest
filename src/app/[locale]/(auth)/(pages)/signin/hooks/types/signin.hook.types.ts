// Types
import type { SignInHandlersReturn } from "../../handlers/types/signin.handlers.types";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";

type LoadingState = {
  provider: string;
  status: boolean;
};

type SignInHookReturn = SignInHandlersReturn & {
  form: UseFormReturn<SignInSchema>;
  loading: LoadingState;
  showPassword: boolean;
  showTwoFactor: boolean;
  t: (arg: string) => string;
};

export type { LoadingState, SignInHookReturn };

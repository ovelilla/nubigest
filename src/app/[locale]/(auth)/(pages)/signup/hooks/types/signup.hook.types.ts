// Types
import type { SignUpHandlersReturn } from "../../handlers/types/signup.handlers.types";
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";
import type { UseFormReturn } from "react-hook-form";

type LoadingState = {
  provider: string;
  status: boolean;
};

type SignUpHookReturn = SignUpHandlersReturn & {
  form: UseFormReturn<SignUpSchema>;
  loading: LoadingState;
  showPassword: boolean;
  t: (arg: string) => string;
};

export type { LoadingState, SignUpHookReturn };

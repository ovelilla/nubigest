// Types
import type { SignInSchema } from "../../schemas/types/signin.schema.types";

type SignInActionProps = {
  values: SignInSchema;
};

type SignInActionReturn = {
  error?: string;
  success?: string;
  twoFactor?: boolean;
};

export type { SignInActionProps, SignInActionReturn };

// Types
import type { ForgotPasswordSchema } from "../../schemas/types/forgot-password.schema.types";

type ForgotPasswordActionProps = {
  values: ForgotPasswordSchema;
};

type ForgotPasswordSuccess = {
  status: "success";
  message: string;
};

type ForgotPasswordError = {
  status: "error";
  message: string;
};

type ForgotPasswordActionReturn = ForgotPasswordSuccess | ForgotPasswordError;

export type { ForgotPasswordActionProps, ForgotPasswordActionReturn };

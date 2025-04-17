// Types
import { ResetPasswordSchema } from "../../schemas/types/reset-password.schema.types";

type ResetPasswordActionProps = {
  values: ResetPasswordSchema;
  token: string | null;
};

type ResetPasswordSuccess = {
  status: "success";
  message: string;
};

type ResetPasswordError = {
  status: "error";
  message: string;
};

type ResetPasswordActionReturn = ResetPasswordSuccess | ResetPasswordError;

export type { ResetPasswordActionProps, ResetPasswordActionReturn };

// Types
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";

type SignUpActionProps = {
  values: SignUpSchema;
};

type SignUpSuccess = {
  status: "success";
  message: string;
};

type SignUpError = {
  status: "error";
  message: string;
};

type SignUpActionReturn = SignUpSuccess | SignUpError;

export type { SignUpActionProps, SignUpActionReturn };

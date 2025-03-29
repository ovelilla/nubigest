// Types
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";

type SignUpActionProps = {
  values: SignUpSchema;
};

type SignUpActionReturn = {
  error?: string;
  success?: string;
};

export type { SignUpActionProps, SignUpActionReturn };

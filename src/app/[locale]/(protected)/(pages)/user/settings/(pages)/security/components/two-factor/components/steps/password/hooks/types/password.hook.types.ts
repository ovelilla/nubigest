// Types
import type { PasswordSchema } from "../../schemas/types/password.schema.types";

type PasswordHookProps = {
  onNext: (data: PasswordSchema) => Promise<{
    code: string;
    status: number;
  }>;
};

export type { PasswordHookProps };

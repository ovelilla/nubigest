// Types
import type { PasswordSchema } from "../../schemas/types/password.schema.types";

type UsePasswordProps = {
  onNext: (data: PasswordSchema) => Promise<{
    code: string;
    status: number;
  }>;
};

export type { UsePasswordProps };

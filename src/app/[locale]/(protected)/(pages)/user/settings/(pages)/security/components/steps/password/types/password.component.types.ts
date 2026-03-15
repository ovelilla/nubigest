// Types
import type { PasswordSchema } from "../schemas/types/password.schema.types";

type PasswordProps = {
  description?: string;
  onCancel?: () => void;
  onNext: (data: PasswordSchema) => Promise<{
    code: string;
    status: number;
  }>;
  title?: string;
};

export type { PasswordProps };

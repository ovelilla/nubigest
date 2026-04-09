// Types
import type { TotpSchema } from "../schemas/types/verify-code.schema.types";

type VerifyCodeProps = {
  description?: string;
  onNext: (data: TotpSchema) => Promise<{
    code: string;
    status: number;
  }>;
  onPrev?: () => void;
  title?: string;
};

export type { VerifyCodeProps };

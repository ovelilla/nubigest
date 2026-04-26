// Types
import type { TotpSchema } from "../../schemas/types/verify-code.schema.types";

type UseVerifyCodeProps = {
  onNext: (data: TotpSchema) => Promise<{
    code: string;
    status: number;
  }>;
};

export type { UseVerifyCodeProps };

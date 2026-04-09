// Types
import type { TotpSchema } from "../../schemas/types/verify-code.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";

type VerifyCodeHandlersProps = {
  form: UseFormReturn<TotpSchema>;
  onNext: (data: TotpSchema) => Promise<{
    code: string;
    status: number;
  }>;
  tErrors: _Translator;
};

type VerifyCodeHandlersReturn = {
  handleSubmit: (data: TotpSchema) => void;
};

type SubmitHandler = (props: {
  data: TotpSchema;
  form: UseFormReturn<TotpSchema>;
  onNext: (data: TotpSchema) => Promise<{
    code: string;
    status: number;
  }>;
  tErrors: _Translator;
}) => Promise<void>;

export type {
  VerifyCodeHandlersProps,
  VerifyCodeHandlersReturn,
  SubmitHandler,
};

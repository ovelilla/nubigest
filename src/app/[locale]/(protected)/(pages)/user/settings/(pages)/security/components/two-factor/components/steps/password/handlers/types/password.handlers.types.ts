// Types
import type { _Translator } from "next-intl";
import type { PasswordSchema } from "../../schemas/types/password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type PasswordHandlersProps = {
  form: UseFormReturn<PasswordSchema>;
  onNext: (data: PasswordSchema) => Promise<{
    code: string;
    status: number;
  }>;
  tErrors: _Translator;
};

type PasswordHandlersReturn = {
  handleSubmit: (data: PasswordSchema) => void;
};

type HandleSubmit = (props: {
  data: PasswordSchema;
  form: UseFormReturn<PasswordSchema>;
  onNext: (data: PasswordSchema) => Promise<{
    code: string;
    status: number;
  }>;
  tErrors: _Translator;
}) => Promise<void>;

export type { PasswordHandlersProps, PasswordHandlersReturn, HandleSubmit };

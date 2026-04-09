// Types
import type { _Translator } from "next-intl";
import type { SetPasswordSchema } from "../../schemas/types/set-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SetPasswordHandlersProps = {
  form: UseFormReturn<SetPasswordSchema>;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => Promise<void>;
  t: _Translator;
};

type SetPasswordHandlersReturn = {
  handleDialogOpenChange: (open: boolean) => void;
  handleSubmit: (values: SetPasswordSchema) => void;
};

type HandleDialogOpenChange = (props: {
  form: UseFormReturn<SetPasswordSchema>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => void;

type HandleSubmit = (props: {
  form: UseFormReturn<SetPasswordSchema>;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => Promise<void>;
  t: _Translator;
  values: SetPasswordSchema;
}) => Promise<void>;

export type {
  SetPasswordHandlersProps,
  SetPasswordHandlersReturn,
  HandleDialogOpenChange,
  HandleSubmit,
};

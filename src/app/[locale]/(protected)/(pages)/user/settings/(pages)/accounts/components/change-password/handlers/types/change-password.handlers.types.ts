// Types
import type { _Translator } from "next-intl";
import type { ChangePasswordSchema } from "../../schemas/types/change-password.schema.types";
import type { UseFormReturn } from "react-hook-form";

type ChangePasswordHandlersProps = {
  form: UseFormReturn<ChangePasswordSchema>;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => Promise<void>;
  tChangePassword: _Translator;
  tErrors: _Translator;
};

type ChangePasswordHandlersReturn = {
  handleDialogOpenChange: (open: boolean) => void;
  handleSubmit: (values: ChangePasswordSchema) => void;
};

type HandleDialogOpenChange = (props: {
  form: UseFormReturn<ChangePasswordSchema>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => void;

type HandleSubmit = (props: {
  form: UseFormReturn<ChangePasswordSchema>;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => Promise<void>;
  tChangePassword: _Translator;
  tErrors: _Translator;
  values: ChangePasswordSchema;
}) => Promise<void>;

export type {
  ChangePasswordHandlersProps,
  ChangePasswordHandlersReturn,
  HandleDialogOpenChange,
  HandleSubmit,
};

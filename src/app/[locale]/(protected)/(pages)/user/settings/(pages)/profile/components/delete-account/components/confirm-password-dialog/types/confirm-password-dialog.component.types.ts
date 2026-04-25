// Vendors
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";
// Types
import type { DeleteAccountSchema } from "../../../schemas/types/delete-account.schema.types";

type ConfirmPasswordDialogProps = {
  form: UseFormReturn<DeleteAccountSchema>;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: DeleteAccountSchema) => Promise<void>;
  t: _Translator;
};

export type { ConfirmPasswordDialogProps };

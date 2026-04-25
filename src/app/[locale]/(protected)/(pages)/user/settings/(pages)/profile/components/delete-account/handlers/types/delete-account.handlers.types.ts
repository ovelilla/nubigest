// Vendors
import type { Dispatch, SetStateAction } from "react";
import type { _Translator } from "next-intl";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { DeleteAccountSchema } from "../../schemas/types/delete-account.schema.types";

type DeleteAccountHandlersProps = {
  form: UseFormReturn<DeleteAccountSchema>;
  hasPassword: boolean;
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsOAuthDialogOpen: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
};

type DeleteAccountHandlersReturn = {
  handleDeleteClick: () => Promise<void>;
  handleDialogOpenChange: (open: boolean) => void;
  handleDialogOpenChangeComplete: (open: boolean) => void;
  handleOAuthDialogOpenChange: (open: boolean) => void;
  handleOAuthDialogSubmit: () => Promise<void>;
  handleSubmit: (values: DeleteAccountSchema) => Promise<void>;
};

type HandleDeleteClick = (props: {
  hasPassword: boolean;
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsOAuthDialogOpen: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type HandleDialogOpenChange = (props: {
  open: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleDialogOpenChangeComplete = (props: {
  form: UseFormReturn<DeleteAccountSchema>;
  open: boolean;
}) => void;

type HandleOAuthDialogOpenChange = (props: {
  open: boolean;
  setIsOAuthDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleOAuthDialogSubmit = (props: {
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  setIsOAuthDialogOpen: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type HandleSubmit = (props: {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
  values: DeleteAccountSchema;
}) => Promise<void>;

export type {
  DeleteAccountHandlersProps,
  DeleteAccountHandlersReturn,
  HandleDeleteClick,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleOAuthDialogOpenChange,
  HandleOAuthDialogSubmit,
  HandleSubmit,
};

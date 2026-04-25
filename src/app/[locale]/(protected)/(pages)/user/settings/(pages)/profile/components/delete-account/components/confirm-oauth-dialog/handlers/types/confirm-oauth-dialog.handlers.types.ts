// Vendors
import type { Dispatch, SetStateAction } from "react";

type ConfirmOAuthDialogHandlersProps = {
  isConfirmed: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => Promise<void>;
  setConfirmation: Dispatch<SetStateAction<string>>;
};

type ConfirmOAuthDialogHandlersReturn = {
  handleOpenChange: (open: boolean) => void;
  handleSubmit: () => Promise<void>;
};

type HandleOpenChange = (props: {
  onOpenChange: (open: boolean) => void;
  open: boolean;
  setConfirmation: Dispatch<SetStateAction<string>>;
}) => void;

type HandleSubmit = (props: {
  isConfirmed: boolean;
  onSubmit: () => Promise<void>;
  setConfirmation: Dispatch<SetStateAction<string>>;
}) => Promise<void>;

export type {
  ConfirmOAuthDialogHandlersProps,
  ConfirmOAuthDialogHandlersReturn,
  HandleOpenChange,
  HandleSubmit,
};

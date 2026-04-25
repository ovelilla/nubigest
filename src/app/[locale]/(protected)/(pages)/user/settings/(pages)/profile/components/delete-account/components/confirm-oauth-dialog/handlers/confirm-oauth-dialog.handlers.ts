// Types
import type {
  ConfirmOAuthDialogHandlersProps,
  ConfirmOAuthDialogHandlersReturn,
  HandleOpenChange,
  HandleSubmit,
} from "./types/confirm-oauth-dialog.handlers.types";

const handleOpenChange: HandleOpenChange = ({
  onOpenChange,
  open,
  setConfirmation,
}) => {
  if (!open) setConfirmation("");
  onOpenChange(open);
};

const handleSubmit: HandleSubmit = async ({
  isConfirmed,
  onSubmit,
  setConfirmation,
}) => {
  if (!isConfirmed) return;
  await onSubmit();
  setConfirmation("");
};

const ConfirmOAuthDialogHandlers = ({
  isConfirmed,
  onOpenChange,
  onSubmit,
  setConfirmation,
}: ConfirmOAuthDialogHandlersProps): ConfirmOAuthDialogHandlersReturn => ({
  handleOpenChange: (open) =>
    handleOpenChange({ onOpenChange, open, setConfirmation }),
  handleSubmit: () => handleSubmit({ isConfirmed, onSubmit, setConfirmation }),
});

export { ConfirmOAuthDialogHandlers };

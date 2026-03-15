// Types
import type {
  ViewBackupCodesHandlersProps,
  ViewBackupCodesHandlersReturn,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleDone,
} from "./types/view-backup-codes.handlers.types";

const handleDialogOpenChange: HandleDialogOpenChange = ({
  open,
  onOpenChange,
}) => {
  onOpenChange(open);
};

const handleDialogOpenChangeComplete: HandleDialogOpenChangeComplete = ({
  open,
  setBackupCodes,
  stepper,
}) => {
  if (!open) {
    setBackupCodes([]);
    stepper.navigation.reset();
  }
};

const handleDone: HandleDone = ({ onOpenChange }) => {
  onOpenChange(false);
};

const ViewBackupCodesHandlers = ({
  onOpenChange,
  refetchSession,
  setBackupCodes,
  stepper,
}: ViewBackupCodesHandlersProps): ViewBackupCodesHandlersReturn => ({
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({ open, onOpenChange }),
  handleDialogOpenChangeComplete: (open) =>
    handleDialogOpenChangeComplete({ open, setBackupCodes, stepper }),
  handleDone: () => handleDone({ onOpenChange }),
});

export { ViewBackupCodesHandlers };

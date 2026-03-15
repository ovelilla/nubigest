// Types
import type {
  BackupCodesHandlersProps,
  BackupCodesHandlersReturn,
  HandleCheckedChange,
  HandleCopySuccess,
  HandleDownloadSuccess,
} from "./types/backup-codes.handlers.types";

const handleCheckedChange: HandleCheckedChange = ({
  checked,
  onAcknowledgedChange,
}) => {
  onAcknowledgedChange?.(checked);
};

const handleCopySuccess: HandleCopySuccess = async ({
  onAcknowledgedChange,
}) => {
  onAcknowledgedChange?.(true);
};

const handleDownloadSuccess: HandleDownloadSuccess = ({
  onAcknowledgedChange,
}) => {
  onAcknowledgedChange?.(true);
};

const BackupCodesHandlers = ({
  onAcknowledgedChange,
}: BackupCodesHandlersProps): BackupCodesHandlersReturn => {
  return {
    handleCheckedChange: (checked) =>
      handleCheckedChange({ checked, onAcknowledgedChange }),
    handleCopySuccess: () => handleCopySuccess({ onAcknowledgedChange }),
    handleDownloadSuccess: () =>
      handleDownloadSuccess({ onAcknowledgedChange }),
  };
};

export { BackupCodesHandlers };

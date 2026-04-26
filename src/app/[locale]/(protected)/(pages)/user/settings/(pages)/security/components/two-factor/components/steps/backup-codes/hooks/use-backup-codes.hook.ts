// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { BackupCodesHandlers } from "../handlers/backup-codes.handlers";
// Types
import type { UseBackupCodesProps } from "./types/backup-codes.hook.types";

const useBackupCodes = ({
  acknowledged,
  onAcknowledgedChange,
}: UseBackupCodesProps) => {
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.steps.backupCodes",
  );

  const { handleCheckedChange, handleCopySuccess, handleDownloadSuccess } =
    BackupCodesHandlers({
      onAcknowledgedChange,
    });

  const showAcknowledgement =
    acknowledged !== undefined && onAcknowledgedChange !== undefined;

  return {
    handleCheckedChange,
    handleCopySuccess,
    handleDownloadSuccess,
    showAcknowledgement,
    t,
  };
};

export { useBackupCodes };

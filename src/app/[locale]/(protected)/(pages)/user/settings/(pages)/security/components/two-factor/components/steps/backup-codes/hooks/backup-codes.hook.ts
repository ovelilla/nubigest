// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { BackupCodesHandlers } from "../handlers/backup-codes.handlers";
// Types
import type { BackupCodesHookProps } from "./types/backup-codes.hook.types";

const BackupCodesHook = ({
  acknowledged,
  onAcknowledgedChange,
}: BackupCodesHookProps) => {
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

export { BackupCodesHook };

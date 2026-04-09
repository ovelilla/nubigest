// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type {
  EnableTwoFactorHandlersProps,
  EnableTwoFactorHandlersReturn,
  HandleAcknowledgedChange,
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandleBackupCodesNext,
  HandleCancel,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleDone,
  HandlePasswordNext,
  HandlePrev,
} from "./types/enable-two-factor.handlers.types";

const handleAcknowledgedChange: HandleAcknowledgedChange = ({
  checked,
  setBackupCodesAcknowledged,
}) => {
  setBackupCodesAcknowledged(checked);
};

const handleAlertDialogAction: HandleAlertDialogAction = ({
  onOpenChange,
  setAlertDialogOpen,
}) => {
  setAlertDialogOpen(false);
  onOpenChange(false);
};

const handleAlertDialogOpenChange: HandleAlertDialogOpenChange = ({
  open,
  setAlertDialogOpen,
}) => {
  setAlertDialogOpen(open);
};

const handleBackupCodesNext: HandleBackupCodesNext = ({
  backupCodesAcknowledged,
  stepper,
}) => {
  if (backupCodesAcknowledged) {
    stepper.navigation.next();
  }
};

const handleCancel: HandleCancel = ({ onOpenChange }) => {
  onOpenChange(false);
};

const handleDialogOpenChange: HandleDialogOpenChange = ({
  backupCodesAcknowledged,
  open,
  onOpenChange,
  setAlertDialogOpen,
  stepper,
}) => {
  const currentStep = stepper.state.current.data;

  if (!open && currentStep.confirmOnExit && !backupCodesAcknowledged) {
    setAlertDialogOpen(true);
    return;
  }

  onOpenChange(open);
};
const handleDialogOpenChangeComplete: HandleDialogOpenChangeComplete = ({
  open,
  setAlertDialogOpen,
  setBackupCodes,
  setBackupCodesAcknowledged,
  stepper,
}) => {
  if (!open) {
    stepper.navigation.reset();
    setBackupCodes([]);
    setBackupCodesAcknowledged(false);
    setAlertDialogOpen(false);
  }
};

const handleDone: HandleDone = ({ onOpenChange }) => {
  onOpenChange(false);
};

const handlePasswordNext: HandlePasswordNext = async ({
  password,
  refetchSession,
  setBackupCodes,
  stepper,
}) => {
  try {
    const { data, error } = await authClient.twoFactor.enable({ password });

    if (error) {
      return {
        code: error.code ?? "DEFAULT",
        status: error.status ?? 500,
      };
    }

    await refetchSession();

    setBackupCodes(data.backupCodes);

    stepper.navigation.next();

    return { code: "SUCCESS", status: 200 };
  } catch (error) {
    console.error("Error enabling two-factor authentication:", error);
    return { code: "DEFAULT", status: 500 };
  }
};

const handlePrev: HandlePrev = ({ stepper }) => {
  stepper.navigation.prev();
};

const EnableTwoFactorHandlers = ({
  backupCodesAcknowledged,
  onOpenChange,
  refetchSession,
  setAlertDialogOpen,
  setBackupCodes,
  setBackupCodesAcknowledged,
  stepper,
}: EnableTwoFactorHandlersProps): EnableTwoFactorHandlersReturn => ({
  handleAcknowledgedChange: (checked) =>
    handleAcknowledgedChange({ checked, setBackupCodesAcknowledged }),
  handleAlertDialogAction: () =>
    handleAlertDialogAction({ onOpenChange, setAlertDialogOpen }),
  handleAlertDialogOpenChange: (open) =>
    handleAlertDialogOpenChange({ open, setAlertDialogOpen }),
  handleBackupCodesNext: () =>
    handleBackupCodesNext({ backupCodesAcknowledged, stepper }),
  handleCancel: () => handleCancel({ onOpenChange }),
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({
      backupCodesAcknowledged,
      open,
      onOpenChange,
      setAlertDialogOpen,
      stepper,
    }),
  handleDialogOpenChangeComplete: (open) =>
    handleDialogOpenChangeComplete({
      open,
      setAlertDialogOpen,
      setBackupCodes,
      setBackupCodesAcknowledged,
      stepper,
    }),
  handleDone: () => handleDone({ onOpenChange }),
  handlePasswordNext: ({ password }) =>
    handlePasswordNext({
      password,
      refetchSession,
      setBackupCodes,
      stepper,
    }),
  handlePrev: () => handlePrev({ stepper }),
});

export { EnableTwoFactorHandlers };

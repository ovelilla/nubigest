// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type {
  SetupAuthenticatorAppHandlersProps,
  SetupAuthenticatorAppHandlersReturn,
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandleCancel,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleDone,
  HandlePasswordNext,
  HandlePrev,
  HandleScanQrCodeNext,
  HandleVerifyCodeNext,
} from "./types/setup-authenticator-app.handlers.types";

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

const handleCancel: HandleCancel = ({ onOpenChange }) => {
  onOpenChange(false);
};

const handleDialogOpenChange: HandleDialogOpenChange = ({
  open,
  onOpenChange,
  setAlertDialogOpen,
  stepper,
}) => {
  const currentStep = stepper.state.current.data;

  if (!open && currentStep.confirmOnExit) {
    setAlertDialogOpen(true);
    return;
  }

  onOpenChange(open);
};

const handleDialogOpenChangeComplete: HandleDialogOpenChangeComplete = ({
  open,
  setAlertDialogOpen,
  stepper,
}) => {
  if (!open) {
    stepper.navigation.reset();
    setAlertDialogOpen(false);
  }
};

const handleDone: HandleDone = ({ onOpenChange }) => {
  onOpenChange(false);
};

const handlePasswordNext: HandlePasswordNext = async ({
  password,
  refetchSession,
  setTotpUri,
  stepper,
}) => {
  try {
    const { data, error } = await authClient.twoFactor.getTotpUri({ password });

    if (error) {
      return {
        code: error.code ?? "DEFAULT",
        status: error.status ?? 500,
      };
    }

    await refetchSession();

    setTotpUri(data.totpURI);

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

const handleScanQrCodeNext: HandleScanQrCodeNext = ({ stepper }) => {
  stepper.navigation.next();
};

const handleVerifyCodeNext: HandleVerifyCodeNext = async ({
  code,
  refetchSession,
  stepper,
}) => {
  try {
    const { error } = await authClient.twoFactor.verifyTotp({
      code,
    });

    if (error) {
      return {
        code: error.code ?? "DEFAULT",
        status: error.status ?? 500,
      };
    }

    await refetchSession();

    stepper.navigation.next();

    return { code: "SUCCESS", status: 200 };
  } catch (error) {
    console.error("Error verifying TOTP code:", error);
    return { code: "DEFAULT", status: 500 };
  }
};

const SetupAuthenticatorAppHandlers = ({
  onOpenChange,
  refetchSession,
  setAlertDialogOpen,
  setTotpUri,
  stepper,
}: SetupAuthenticatorAppHandlersProps): SetupAuthenticatorAppHandlersReturn => ({
  handleAlertDialogAction: () =>
    handleAlertDialogAction({ onOpenChange, setAlertDialogOpen }),
  handleAlertDialogOpenChange: (open) =>
    handleAlertDialogOpenChange({ open, setAlertDialogOpen }),
  handleCancel: () => handleCancel({ onOpenChange }),
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({ open, onOpenChange, setAlertDialogOpen, stepper }),
  handleDialogOpenChangeComplete: (open) =>
    handleDialogOpenChangeComplete({ open, setAlertDialogOpen, stepper }),
  handleDone: () => handleDone({ onOpenChange }),
  handlePasswordNext: ({ password }) =>
    handlePasswordNext({
      password,
      refetchSession,
      setTotpUri,
      stepper,
    }),
  handlePrev: () => handlePrev({ stepper }),
  handleScanQrCodeNext: () => handleScanQrCodeNext({ stepper }),
  handleVerifyCodeNext: ({ code }) =>
    handleVerifyCodeNext({ code, refetchSession, stepper }),
});

export { SetupAuthenticatorAppHandlers };

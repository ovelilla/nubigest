// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type {
  DisableTwoFactorHandlersProps,
  DisableTwoFactorHandlersReturn,
  HandleCancel,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleDone,
  HandlePasswordNext,
} from "./types/disable-two-factor.handlers.types";

const handleCancel: HandleCancel = ({ onOpenChange }) => {
  onOpenChange(false);
};

const handleDialogOpenChange: HandleDialogOpenChange = ({
  open,
  onOpenChange,
}) => {
  onOpenChange(open);
};

const handleDialogOpenChangeComplete: HandleDialogOpenChangeComplete = ({
  open,
  stepper,
}) => {
  if (!open) {
    stepper.navigation.reset();
  }
};

const handleDone: HandleDone = ({ onOpenChange }) => {
  onOpenChange(false);
};

const handlePasswordNext: HandlePasswordNext = async ({
  password,
  refetchSession,
  stepper,
}) => {
  try {
    const { error } = await authClient.twoFactor.disable({ password });

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
    console.error("Error disabling two-factor authentication:", error);
    return { code: "DEFAULT", status: 500 };
  }
};

const DisableTwoFactorHandlers = ({
  onOpenChange,
  refetchSession,
  stepper,
}: DisableTwoFactorHandlersProps): DisableTwoFactorHandlersReturn => ({
  handleCancel: () => handleCancel({ onOpenChange }),
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({ open, onOpenChange }),
  handleDialogOpenChangeComplete: (open) =>
    handleDialogOpenChangeComplete({ open, stepper }),
  handleDone: () => handleDone({ onOpenChange }),
  handlePasswordNext: ({ password }) =>
    handlePasswordNext({
      password,
      refetchSession,
      stepper,
    }),
});

export { DisableTwoFactorHandlers };

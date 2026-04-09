// Types
import type {
  HandleDisableTwoFactorOpenChange,
  HandleEnableTwoFactorOpenChange,
  HandleGenerateBackupCodesClick,
  HandleGenerateBackupCodesOpenChange,
  HandleSetupAuthenticatorAppClick,
  HandleSetupAuthenticatorAppOpenChange,
  HandleToggleTwoFactor,
  HandleViewBackupCodesClick,
  HandleViewBackupCodesOpenChange,
  SecurityHandlersProps,
  SecurityHandlersReturn,
} from "./types/two-factor.handlers.types";

const handleDisableTwoFactorOpenChange: HandleDisableTwoFactorOpenChange = ({
  setDisableTwoFactorOpen,
  setEnableTwoFactorOpen,
  open,
}) => {
  if (open) setEnableTwoFactorOpen(false);
  setDisableTwoFactorOpen(open);
};

const handleEnableTwoFactorOpenChange: HandleEnableTwoFactorOpenChange = ({
  setDisableTwoFactorOpen,
  setEnableTwoFactorOpen,
  open,
}) => {
  if (open) setDisableTwoFactorOpen(false);
  setEnableTwoFactorOpen(open);
};

const handleGenerateBackupCodesClick: HandleGenerateBackupCodesClick = ({
  setGenerateBackupCodesOpen,
}) => {
  setGenerateBackupCodesOpen(true);
};

const handleGenerateBackupCodesOpenChange: HandleGenerateBackupCodesOpenChange =
  ({ setGenerateBackupCodesOpen, open }) => {
    setGenerateBackupCodesOpen(open);
  };

const handleSetupAuthenticatorAppClick: HandleSetupAuthenticatorAppClick = ({
  setSetupAuthenticatorAppOpen,
}) => {
  setSetupAuthenticatorAppOpen(true);
};

const handleSetupAuthenticatorAppOpenChange: HandleSetupAuthenticatorAppOpenChange =
  ({ setSetupAuthenticatorAppOpen, open }) => {
    setSetupAuthenticatorAppOpen(open);
  };

const handleToggleTwoFactor: HandleToggleTwoFactor = ({
  checked,
  setDisableTwoFactorOpen,
  setEnableTwoFactorOpen,
}) => {
  if (checked) {
    setDisableTwoFactorOpen(false);
    setEnableTwoFactorOpen(true);
  } else {
    setEnableTwoFactorOpen(false);
    setDisableTwoFactorOpen(true);
  }
};

const handleViewBackupCodesClick: HandleViewBackupCodesClick = ({
  setViewBackupCodesOpen,
}) => {
  setViewBackupCodesOpen(true);
};

const handleViewBackupCodesOpenChange: HandleViewBackupCodesOpenChange = ({
  setViewBackupCodesOpen,
  open,
}) => {
  setViewBackupCodesOpen(open);
};

const SecurityHandlers = ({
  setDisableTwoFactorOpen,
  setEnableTwoFactorOpen,
  setGenerateBackupCodesOpen,
  setSetupAuthenticatorAppOpen,
  setViewBackupCodesOpen,
}: SecurityHandlersProps): SecurityHandlersReturn => {
  return {
    handleDisableTwoFactorOpenChange: (open) =>
      handleDisableTwoFactorOpenChange({
        setDisableTwoFactorOpen,
        setEnableTwoFactorOpen,
        open,
      }),
    handleEnableTwoFactorOpenChange: (open) =>
      handleEnableTwoFactorOpenChange({
        setDisableTwoFactorOpen,
        setEnableTwoFactorOpen,
        open,
      }),
    handleGenerateBackupCodesClick: () =>
      handleGenerateBackupCodesClick({
        setGenerateBackupCodesOpen,
      }),
    handleGenerateBackupCodesOpenChange: (open) =>
      handleGenerateBackupCodesOpenChange({
        setGenerateBackupCodesOpen,
        open,
      }),
    handleSetupAuthenticatorAppClick: () =>
      handleSetupAuthenticatorAppClick({
        setSetupAuthenticatorAppOpen,
      }),
    handleSetupAuthenticatorAppOpenChange: (open) =>
      handleSetupAuthenticatorAppOpenChange({
        setSetupAuthenticatorAppOpen,
        open,
      }),
    handleToggleTwoFactor: (checked) =>
      handleToggleTwoFactor({
        checked,
        setDisableTwoFactorOpen,
        setEnableTwoFactorOpen,
      }),
    handleViewBackupCodesClick: () =>
      handleViewBackupCodesClick({
        setViewBackupCodesOpen,
      }),
    handleViewBackupCodesOpenChange: (open) =>
      handleViewBackupCodesOpenChange({
        setViewBackupCodesOpen,
        open,
      }),
  };
};

export { SecurityHandlers };

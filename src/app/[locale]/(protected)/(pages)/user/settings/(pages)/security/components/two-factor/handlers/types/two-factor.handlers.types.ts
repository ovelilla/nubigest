// Types
import type { Dispatch, SetStateAction } from "react";

type HandleDisableTwoFactorOpenChange = (props: {
  setDisableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  setEnableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => void;

type HandleEnableTwoFactorOpenChange = (props: {
  setDisableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  setEnableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => void;

type HandleGenerateBackupCodesClick = (props: {
  setGenerateBackupCodesOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleGenerateBackupCodesOpenChange = (props: {
  setGenerateBackupCodesOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => void;

type HandleSetupAuthenticatorAppClick = (props: {
  setSetupAuthenticatorAppOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleSetupAuthenticatorAppOpenChange = (props: {
  setSetupAuthenticatorAppOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => void;

type HandleToggleTwoFactor = (props: {
  checked: boolean;
  setDisableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  setEnableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleViewBackupCodesClick = (props: {
  setViewBackupCodesOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleViewBackupCodesOpenChange = (props: {
  setViewBackupCodesOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => void;

type SecurityHandlersProps = {
  setDisableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  setEnableTwoFactorOpen: Dispatch<SetStateAction<boolean>>;
  setGenerateBackupCodesOpen: Dispatch<SetStateAction<boolean>>;
  setSetupAuthenticatorAppOpen: Dispatch<SetStateAction<boolean>>;
  setViewBackupCodesOpen: Dispatch<SetStateAction<boolean>>;
};

type SecurityHandlersReturn = {
  handleDisableTwoFactorOpenChange: (open: boolean) => void;
  handleEnableTwoFactorOpenChange: (open: boolean) => void;
  handleGenerateBackupCodesClick: () => void;
  handleGenerateBackupCodesOpenChange: (open: boolean) => void;
  handleSetupAuthenticatorAppClick: () => void;
  handleSetupAuthenticatorAppOpenChange: (open: boolean) => void;
  handleToggleTwoFactor: (checked: boolean) => void;
  handleViewBackupCodesClick: () => void;
  handleViewBackupCodesOpenChange: (open: boolean) => void;
};

export type {
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
};

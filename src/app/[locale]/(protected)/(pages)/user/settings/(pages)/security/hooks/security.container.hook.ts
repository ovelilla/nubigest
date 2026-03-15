// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Handlers
import { SecurityContainerHandlers } from "../handlers/security.container.handlers";
// Libs
import { authClient } from "@/lib/auth-client";

const SecurityContainerHook = () => {
  const [disableTwoFactorOpen, setDisableTwoFactorOpen] = useState(false);
  const [enableTwoFactorOpen, setEnableTwoFactorOpen] = useState(false);
  const [generateBackupCodesOpen, setGenerateBackupCodesOpen] = useState(false);
  const [setupAuthenticatorAppOpen, setSetupAuthenticatorAppOpen] =
    useState(false);
  const [viewBackupCodesOpen, setViewBackupCodesOpen] = useState(false);

  const t = useTranslations("securitySettings");

  const { data: sessionData, isPending: isPendingSession } =
    authClient.useSession();

  const isTwoFactorEnabled = sessionData?.user.twoFactorEnabled === true;

  const {
    handleDisableTwoFactorOpenChange,
    handleEnableTwoFactorOpenChange,
    handleGenerateBackupCodesClick,
    handleGenerateBackupCodesOpenChange,
    handleSetupAuthenticatorAppClick,
    handleSetupAuthenticatorAppOpenChange,
    handleToggleTwoFactor,
    handleViewBackupCodesClick,
    handleViewBackupCodesOpenChange,
  } = SecurityContainerHandlers({
    setDisableTwoFactorOpen,
    setEnableTwoFactorOpen,
    setGenerateBackupCodesOpen,
    setSetupAuthenticatorAppOpen,
    setViewBackupCodesOpen,
  });

  return {
    disableTwoFactorOpen,
    enableTwoFactorOpen,
    generateBackupCodesOpen,
    handleDisableTwoFactorOpenChange,
    handleEnableTwoFactorOpenChange,
    handleGenerateBackupCodesClick,
    handleGenerateBackupCodesOpenChange,
    handleSetupAuthenticatorAppClick,
    handleSetupAuthenticatorAppOpenChange,
    handleToggleTwoFactor,
    handleViewBackupCodesClick,
    handleViewBackupCodesOpenChange,
    isPendingSession,
    isTwoFactorEnabled,
    setupAuthenticatorAppOpen,
    t,
    viewBackupCodesOpen,
  };
};

export { SecurityContainerHook };

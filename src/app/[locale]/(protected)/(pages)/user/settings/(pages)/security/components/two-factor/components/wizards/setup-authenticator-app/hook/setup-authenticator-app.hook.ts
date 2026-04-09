"use client";
// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Config
import { useStepper } from "../config/setup-authenticator-app.config";
// Handlers
import { SetupAuthenticatorAppHandlers } from "../handlers/setup-authenticator-app.handlers";
// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { SetupAuthenticatorAppHookProps } from "./types/setup-authenticator-app.hook.types";

const SetupAuthenticatorAppHook = ({
  onOpenChange,
}: SetupAuthenticatorAppHookProps) => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [totpUri, setTotpUri] = useState<string | null>(null);

  const stepper = useStepper();

  const t = useTranslations(
    "securitySettings.components.twoFactor.components.wizards.setupAuthenticatorApp",
  );

  const { refetch: refetchSession } = authClient.useSession();

  const id = stepper.state.current.data.id;

  const {
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
    handlePrev,
    handleScanQrCodeNext,
    handleVerifyCodeNext,
  } = SetupAuthenticatorAppHandlers({
    onOpenChange,
    refetchSession,
    setAlertDialogOpen,
    setTotpUri,
    stepper,
  });

  return {
    alertDialogOpen,
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
    handlePrev,
    handleScanQrCodeNext,
    handleVerifyCodeNext,
    id,
    stepper,
    t,
    totpUri,
  };
};

export { SetupAuthenticatorAppHook };

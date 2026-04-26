"use client";
// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Config
import { useStepper } from "../config/enable-two-factor.config";
// Handlers
import { EnableTwoFactorHandlers } from "../handlers/enable-two-factor.handlers";
// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { UseEnableTwoFactorProps } from "./types/enable-two-factor.hook.types";

const useEnableTwoFactor = ({ onOpenChange }: UseEnableTwoFactorProps) => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [backupCodesAcknowledged, setBackupCodesAcknowledged] = useState(false);

  const stepper = useStepper();
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.wizards.enableTwoFactor",
  );

  const { refetch: refetchSession } = authClient.useSession();

  const id = stepper.state.current.data.id;

  const {
    handleAcknowledgedChange,
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleBackupCodesNext,
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
    handlePrev,
  } = EnableTwoFactorHandlers({
    backupCodesAcknowledged,
    onOpenChange,
    refetchSession,
    setAlertDialogOpen,
    setBackupCodes,
    setBackupCodesAcknowledged,
    stepper,
  });

  return {
    alertDialogOpen,
    backupCodes,
    backupCodesAcknowledged,
    handleAcknowledgedChange,
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleBackupCodesNext,
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
    handlePrev,
    id,
    stepper,
    t,
  };
};

export { useEnableTwoFactor };

"use client";
// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Config
import { useStepper } from "../config/generate-backup-codes.config";
// Handlers
import { GenerateBackupCodesHandlers } from "../handlers/generate-backup-codes.handlers";
// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { UseGenerateBackupCodesProps } from "./types/generate-backup-codes.hook.types";

const useGenerateBackupCodes = ({
  onOpenChange,
}: UseGenerateBackupCodesProps) => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [backupCodesAcknowledged, setBackupCodesAcknowledged] = useState(false);

  const stepper = useStepper();
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.wizards.generateBackupCodes",
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
  } = GenerateBackupCodesHandlers({
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

export { useGenerateBackupCodes };

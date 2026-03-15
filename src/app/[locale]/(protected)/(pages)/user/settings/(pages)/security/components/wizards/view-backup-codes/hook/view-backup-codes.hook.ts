"use client";
// Vendors
import { useEffect, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
// Actions
import { viewBackupCodesAction } from "../actions/view-backup-codes.actions";
// Config
import { useStepper } from "../config/view-backup-codes.config";
// Handlers
import { ViewBackupCodesHandlers } from "../handlers/view-backup-codes.handlers";
// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { ViewBackupCodesHookProps } from "./types/view-backup-codes.hook.types";

const ViewBackupCodesHook = ({
  onOpenChange,
  open,
}: ViewBackupCodesHookProps) => {
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const stepper = useStepper();

  const t = useTranslations(
    "securitySettings.components.wizards.viewBackupCodes",
  );

  const { refetch: refetchSession } = authClient.useSession();

  const id = stepper.state.current.data.id;

  useEffect(() => {
    if (open) {
      startTransition(async () => {
        const { backupCodes } = await viewBackupCodesAction();
        setBackupCodes(backupCodes);
      });
    }
  }, [open]);

  const { handleDialogOpenChange, handleDialogOpenChangeComplete, handleDone } =
    ViewBackupCodesHandlers({
      onOpenChange,
      refetchSession,
      setBackupCodes,
      stepper,
    });

  return {
    backupCodes,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    id,
    isPending,
    stepper,
    t,
  };
};

export { ViewBackupCodesHook };

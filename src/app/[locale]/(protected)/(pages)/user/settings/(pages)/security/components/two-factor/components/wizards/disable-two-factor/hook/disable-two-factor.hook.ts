"use client";
// Vendors
import { useTranslations } from "next-intl";
// Config
import { useStepper } from "../config/disable-two-factor.config";
// Handlers
import { DisableTwoFactorHandlers } from "../handlers/disable-two-factor.handlers";
// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { DisableTwoFactorHookProps } from "./types/disable-two-factor.hook.types";

const DisableTwoFactorHook = ({ onOpenChange }: DisableTwoFactorHookProps) => {
  const stepper = useStepper();
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.wizards.disableTwoFactor",
  );

  const { refetch: refetchSession } = authClient.useSession();

  const id = stepper.state.current.data.id;

  const {
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
  } = DisableTwoFactorHandlers({
    onOpenChange,
    refetchSession,
    stepper,
  });

  return {
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
    id,
    stepper,
    t,
  };
};

export { DisableTwoFactorHook };

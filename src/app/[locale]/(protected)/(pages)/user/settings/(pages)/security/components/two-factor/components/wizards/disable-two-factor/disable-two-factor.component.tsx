"use client";
// Components
import { Complete } from "../../steps/complete/complete.component";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Password } from "../../steps/password/password.component";
// Hooks
import { DisableTwoFactorHook } from "./hook/disable-two-factor.hook";
// Types
import type { DisableTwoFactorProps } from "./types/disable-two-factor.component.types";

const DisableTwoFactor = ({ onOpenChange, open }: DisableTwoFactorProps) => {
  const {
    handleCancel,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    handlePasswordNext,
    id,
    stepper,
    t,
  } = DisableTwoFactorHook({
    onOpenChange,
  });

  return (
    <Dialog
      open={open}
      onOpenChange={handleDialogOpenChange}
      onOpenChangeComplete={handleDialogOpenChangeComplete}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t(`steps.${id}.ui.dialog.content.header.title`)}
          </DialogTitle>
          <DialogDescription>
            {t(`steps.${id}.ui.dialog.content.header.description`)}
          </DialogDescription>
        </DialogHeader>
        {stepper.flow.switch({
          password: () => (
            <Password onCancel={handleCancel} onNext={handlePasswordNext} />
          ),
          complete: () => <Complete onDone={handleDone} />,
        })}
      </DialogContent>
    </Dialog>
  );
};

export { DisableTwoFactor };

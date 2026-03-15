"use client";
// Components
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BackupCodes } from "../../steps/backup-codes/backup-codes.component";
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
import { EnableTwoFactorHook } from "./hook/enable-two-factor.hook";
// Types
import type { EnableTwoFactorProps } from "./types/enable-two-factor.component.types";

const EnableTwoFactor = ({ onOpenChange, open }: EnableTwoFactorProps) => {
  const {
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
    id,
    stepper,
    t,
  } = EnableTwoFactorHook({
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
          backupCodes: () => (
            <BackupCodes
              acknowledged={backupCodesAcknowledged}
              backupCodes={backupCodes}
              onAcknowledgedChange={handleAcknowledgedChange}
              onNext={handleBackupCodesNext}
            />
          ),
          complete: () => <Complete onDone={handleDone} />,
        })}
      </DialogContent>
      {stepper.state.current.data.confirmOnExit && (
        <AlertDialog
          open={alertDialogOpen}
          onOpenChange={handleAlertDialogOpenChange}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {t(`steps.${id}.ui.alertDialog.content.header.title`)}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {t(`steps.${id}.ui.alertDialog.content.header.description`)}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                {t(
                  `steps.${id}.ui.alertDialog.content.footer.cancelButton.label`,
                )}
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleAlertDialogAction}>
                {t(
                  `steps.${id}.ui.alertDialog.content.footer.actionButton.label`,
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </Dialog>
  );
};

export { EnableTwoFactor };

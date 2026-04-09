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
import { Complete } from "../../steps/complete/complete.component";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Password } from "../../steps/password/password.component";
import { ScanQrCode } from "../../steps/scan-qr-code/scan-qr-code.component";
import { VerifyCode } from "../../steps/verify-code/verify-code.component";
// Hooks
import { SetupAuthenticatorAppHook } from "./hook/setup-authenticator-app.hook";
// Types
import type { SetupAuthenticatorAppProps } from "./types/setup-authenticator-app.component.types";

const SetupAuthenticatorApp = ({
  onOpenChange,
  open,
}: SetupAuthenticatorAppProps) => {
  const {
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
  } = SetupAuthenticatorAppHook({
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
          scanQrCode: () => (
            <ScanQrCode onNext={handleScanQrCodeNext} totpUri={totpUri} />
          ),
          verifyCode: () => (
            <VerifyCode onPrev={handlePrev} onNext={handleVerifyCodeNext} />
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

export { SetupAuthenticatorApp };

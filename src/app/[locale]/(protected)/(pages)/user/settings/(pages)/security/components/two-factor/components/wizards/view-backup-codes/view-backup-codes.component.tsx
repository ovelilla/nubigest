"use client";
// Components
import { BackupCodes } from "../../steps/backup-codes/backup-codes.component";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
// Hooks
import { ViewBackupCodesHook } from "./hook/view-backup-codes.hook";
// Types
import type { ViewBackupCodesProps } from "./types/view-backup-codes.component.types";

const ViewBackupCodes = ({ onOpenChange, open }: ViewBackupCodesProps) => {
  const {
    backupCodes,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleDone,
    id,
    isPending,
    stepper,
    t,
  } = ViewBackupCodesHook({
    onOpenChange,
    open,
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
          backupCodes: () => (
            <BackupCodes
              backupCodes={backupCodes}
              onDone={handleDone}
              isLoading={isPending}
            />
          ),
        })}
      </DialogContent>
    </Dialog>
  );
};

export { ViewBackupCodes };

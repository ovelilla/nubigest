// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { GenerateBackupCodesStepper } from "../../types/generate-backup-codes.component.types";

type RefetchSession = ReturnType<typeof authClient.useSession>["refetch"];

type GenerateBackupCodesHandlersProps = {
  backupCodesAcknowledged: boolean;
  onOpenChange: (open: boolean) => void;
  refetchSession: RefetchSession;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setBackupCodes: Dispatch<SetStateAction<string[]>>;
  setBackupCodesAcknowledged: Dispatch<SetStateAction<boolean>>;
  stepper: GenerateBackupCodesStepper;
};

type GenerateBackupCodesHandlersReturn = {
  handleAcknowledgedChange: (checked: boolean) => void;
  handleAlertDialogAction: () => void;
  handleAlertDialogOpenChange: (open: boolean) => void;
  handleBackupCodesNext: () => void;
  handleCancel: () => void;
  handleDialogOpenChange: (open: boolean) => void;
  handleDialogOpenChangeComplete: (open: boolean) => void;
  handleDone: () => void;
  handlePasswordNext: (props: { password: string }) => Promise<{
    code: string;
    status: number;
  }>;
  handlePrev: () => void;
};

type HandleAcknowledgedChange = (props: {
  checked: boolean;
  setBackupCodesAcknowledged: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleAlertDialogAction = (props: {
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  onOpenChange: (open: boolean) => void;
}) => void;

type HandleAlertDialogOpenChange = (props: {
  open: boolean;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleBackupCodesNext = (props: {
  backupCodesAcknowledged: boolean;
  stepper: GenerateBackupCodesStepper;
}) => void;

type HandleCancel = (props: { onOpenChange: (open: boolean) => void }) => void;

type HandleDialogOpenChange = (props: {
  backupCodesAcknowledged: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  stepper: GenerateBackupCodesStepper;
}) => void;

type HandleDialogOpenChangeComplete = (props: {
  open: boolean;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setBackupCodes: Dispatch<SetStateAction<string[]>>;
  setBackupCodesAcknowledged: Dispatch<SetStateAction<boolean>>;
  stepper: GenerateBackupCodesStepper;
}) => void;

type HandleDone = (props: { onOpenChange: (open: boolean) => void }) => void;

type HandlePasswordNext = (props: {
  password: string;
  refetchSession: RefetchSession;
  setBackupCodes: Dispatch<SetStateAction<string[]>>;
  stepper: GenerateBackupCodesStepper;
}) => Promise<{
  code: string;
  status: number;
}>;

type HandlePrev = (props: { stepper: GenerateBackupCodesStepper }) => void;

export type {
  GenerateBackupCodesHandlersProps,
  GenerateBackupCodesHandlersReturn,
  HandleAcknowledgedChange,
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandleBackupCodesNext,
  HandlePrev,
  HandleCancel,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandlePasswordNext,
  HandleDone,
};

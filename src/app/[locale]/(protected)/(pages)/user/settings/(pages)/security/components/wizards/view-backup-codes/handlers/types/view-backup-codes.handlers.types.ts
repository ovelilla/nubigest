// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { ViewBackupCodesStepper } from "../../types/view-backup-codes.component.types";

type RefetchSession = ReturnType<typeof authClient.useSession>["refetch"];

type ViewBackupCodesHandlersProps = {
  onOpenChange: (open: boolean) => void;
  refetchSession: RefetchSession;
  setBackupCodes: Dispatch<SetStateAction<string[]>>;
  stepper: ViewBackupCodesStepper;
};

type ViewBackupCodesHandlersReturn = {
  handleDialogOpenChange: (open: boolean) => void;
  handleDialogOpenChangeComplete: (open: boolean) => void;
  handleDone: () => void;
};

type HandleDialogOpenChange = (props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => void;

type HandleDialogOpenChangeComplete = (props: {
  open: boolean;
  setBackupCodes: Dispatch<SetStateAction<string[]>>;
  stepper: ViewBackupCodesStepper;
}) => void;

type HandleDone = (props: { onOpenChange: (open: boolean) => void }) => void;

export type {
  ViewBackupCodesHandlersProps,
  ViewBackupCodesHandlersReturn,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleDone,
};

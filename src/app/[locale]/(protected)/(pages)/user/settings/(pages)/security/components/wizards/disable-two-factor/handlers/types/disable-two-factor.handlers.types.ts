// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { DisableTwoFactorStepper } from "../../types/disable-two-factor.component.types";

type RefetchSession = ReturnType<typeof authClient.useSession>["refetch"];

type DisableTwoFactorHandlersProps = {
  onOpenChange: (open: boolean) => void;
  refetchSession: RefetchSession;
  stepper: DisableTwoFactorStepper;
};

type DisableTwoFactorHandlersReturn = {
  handleCancel: () => void;
  handleDialogOpenChange: (open: boolean) => void;
  handleDialogOpenChangeComplete: (open: boolean) => void;
  handleDone: () => void;
  handlePasswordNext: (props: { password: string }) => Promise<{
    code: string;
    status: number;
  }>;
};

type HandleCancel = (props: { onOpenChange: (open: boolean) => void }) => void;

type HandleDialogOpenChange = (props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => void;

type HandleDialogOpenChangeComplete = (props: {
  open: boolean;
  stepper: DisableTwoFactorStepper;
}) => void;

type HandleDone = (props: { onOpenChange: (open: boolean) => void }) => void;

type HandlePasswordNext = (props: {
  password: string;
  refetchSession: RefetchSession;
  stepper: DisableTwoFactorStepper;
}) => Promise<{
  code: string;
  status: number;
}>;

export type {
  DisableTwoFactorHandlersProps,
  DisableTwoFactorHandlersReturn,
  HandleCancel,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleDone,
  HandlePasswordNext,
};

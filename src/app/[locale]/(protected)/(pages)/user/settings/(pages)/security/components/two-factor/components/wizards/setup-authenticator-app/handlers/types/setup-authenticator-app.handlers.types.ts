// Libs
import { authClient } from "@/lib/auth-client";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { SetupAuthenticatorAppStepper } from "../../types/setup-authenticator-app.component.types";

type RefetchSession = ReturnType<typeof authClient.useSession>["refetch"];

type SetupAuthenticatorAppHandlersProps = {
  onOpenChange: (open: boolean) => void;
  refetchSession: RefetchSession;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setTotpUri: Dispatch<SetStateAction<string | null>>;
  stepper: SetupAuthenticatorAppStepper;
};

type SetupAuthenticatorAppHandlersReturn = {
  handleAlertDialogAction: () => void;
  handleAlertDialogOpenChange: (open: boolean) => void;
  handleCancel: () => void;
  handleDialogOpenChange: (open: boolean) => void;
  handleDialogOpenChangeComplete: (open: boolean) => void;
  handleDone: () => void;
  handlePasswordNext: (props: { password: string }) => Promise<{
    code: string;
    status: number;
  }>;
  handlePrev: () => void;
  handleScanQrCodeNext: () => void;
  handleVerifyCodeNext: (props: { code: string }) => Promise<{
    code: string;
    status: number;
  }>;
};

type HandleAlertDialogAction = (props: {
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  onOpenChange: (open: boolean) => void;
}) => void;

type HandleAlertDialogOpenChange = (props: {
  open: boolean;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleCancel = (props: { onOpenChange: (open: boolean) => void }) => void;

type HandleDialogOpenChange = (props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  stepper: SetupAuthenticatorAppStepper;
}) => void;

type HandleDialogOpenChangeComplete = (props: {
  open: boolean;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  stepper: SetupAuthenticatorAppStepper;
}) => void;

type HandleDone = (props: { onOpenChange: (open: boolean) => void }) => void;

type HandlePasswordNext = (props: {
  password: string;
  refetchSession: RefetchSession;
  setTotpUri: Dispatch<SetStateAction<string | null>>;
  stepper: SetupAuthenticatorAppStepper;
}) => Promise<{
  code: string;
  status: number;
}>;

type HandlePrev = (props: { stepper: SetupAuthenticatorAppStepper }) => void;

type HandleScanQrCodeNext = (props: {
  stepper: SetupAuthenticatorAppStepper;
}) => void;

type HandleVerifyCodeNext = (props: {
  code: string;
  refetchSession: RefetchSession;
  stepper: SetupAuthenticatorAppStepper;
}) => Promise<{
  code: string;
  status: number;
}>;

export type {
  SetupAuthenticatorAppHandlersProps,
  SetupAuthenticatorAppHandlersReturn,
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandlePrev,
  HandleCancel,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandlePasswordNext,
  HandleDone,
  HandleScanQrCodeNext,
  HandleVerifyCodeNext,
};

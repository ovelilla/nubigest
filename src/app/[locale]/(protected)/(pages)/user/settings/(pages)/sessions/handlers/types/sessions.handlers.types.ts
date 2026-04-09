// Vendors
import { useRouter } from "@/i18n/navigation";
// Types
import type { _Translator } from "next-intl";
import type { AlertDialogAction } from "../../types/sessions.types";
import type { Dispatch, SetStateAction } from "react";
import type { QueryClient } from "@tanstack/react-query";

type HandleAlertDialogAction = (props: {
  alertDialogAction: AlertDialogAction;
  queryClient: QueryClient;
  router: ReturnType<typeof useRouter>;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsRevokingOtherSessions: Dispatch<SetStateAction<boolean>>;
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type HandleAlertDialogOpenChange = (props: {
  open: boolean;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleRefreshButtonClick = (props: {
  queryClient: QueryClient;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type HandleRevokeSessionButtonClick = (props: {
  queryClient: QueryClient;
  setRevokingToken: Dispatch<SetStateAction<string | null>>;
  t: _Translator;
  token: string;
}) => Promise<void>;

type HandleRevokeOtherSessions = (props: {
  queryClient: QueryClient;
  setIsRevokingOtherSessions: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type HandleRevokeOtherSessionsButtonClick = (props: {
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleSignOut = (props: {
  router: ReturnType<typeof useRouter>;
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type HandleSignOutButtonClick = (props: {
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type SessionsHandlersProps = {
  alertDialogAction: AlertDialogAction;
  queryClient: QueryClient;
  router: ReturnType<typeof useRouter>;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setRevokingToken: Dispatch<SetStateAction<string | null>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  setIsRevokingOtherSessions: Dispatch<SetStateAction<boolean>>;
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
};

type SessionsHandlersReturn = {
  handleAlertDialogAction: () => void;
  handleAlertDialogOpenChange: (open: boolean) => void;
  handleRefreshButtonClick: () => Promise<void>;
  handleRevokeSessionButtonClick: (token: string) => Promise<void>;
  handleRevokeOtherSessionsButtonClick: () => void;
  handleSignOutButtonClick: () => void;
};

export type {
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandleRefreshButtonClick,
  HandleRevokeSessionButtonClick,
  HandleRevokeOtherSessions,
  HandleRevokeOtherSessionsButtonClick,
  HandleSignOut,
  HandleSignOutButtonClick,
  SessionsHandlersProps,
  SessionsHandlersReturn,
};

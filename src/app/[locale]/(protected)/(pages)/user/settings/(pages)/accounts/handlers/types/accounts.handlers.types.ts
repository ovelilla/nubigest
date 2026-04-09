// Types
import type { Dispatch, SetStateAction } from "react";
import type { QueryClient } from "@tanstack/react-query";
import type { _Translator } from "next-intl";
import type {
  AlertDialogAction,
  PendingUnlinkAccount,
} from "../../types/accounts.types";

type AccountsHandlersProps = {
  alertDialogAction: AlertDialogAction;
  currentUnlinkAccount: PendingUnlinkAccount;
  queryClient: QueryClient;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setChangePasswordOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentUnlinkAccount: Dispatch<SetStateAction<PendingUnlinkAccount>>;
  setIsLinkingProvider: Dispatch<SetStateAction<string | null>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  setIsUnlinkingAccount: Dispatch<SetStateAction<boolean>>;
  setSetPasswordOpen: Dispatch<SetStateAction<boolean>>;
  tAccounts: _Translator;
  tErrors: _Translator;
};

type AccountsHandlersReturn = {
  handleAlertDialogAction: () => Promise<void>;
  handleAlertDialogOpenChange: (open: boolean) => void;
  handleChangePasswordButtonClick: () => void;
  handleChangePasswordOpenChange: (open: boolean) => void;
  handleChangePasswordSuccess: () => Promise<void>;
  handleLinkProviderButtonClick: (providerId: string) => Promise<void>;
  handleRefreshButtonClick: () => Promise<void>;
  handleSetPasswordButtonClick: () => void;
  handleSetPasswordOpenChange: (open: boolean) => void;
  handleSetPasswordSuccess: () => Promise<void>;
  handleUnlinkAccountButtonClick: (
    account: NonNullable<PendingUnlinkAccount>,
  ) => void;
};

type HandleAlertDialogAction = (props: {
  alertDialogAction: AlertDialogAction;
  currentUnlinkAccount: PendingUnlinkAccount;
  queryClient: QueryClient;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentUnlinkAccount: Dispatch<SetStateAction<PendingUnlinkAccount>>;
  setIsUnlinkingAccount: Dispatch<SetStateAction<boolean>>;
  tAccounts: _Translator;
  tErrors: _Translator;
}) => Promise<void>;

type HandleAlertDialogOpenChange = (props: {
  open: boolean;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentUnlinkAccount: Dispatch<SetStateAction<PendingUnlinkAccount>>;
}) => void;

type HandleChangePasswordButtonClick = (props: {
  setChangePasswordOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleChangePasswordOpenChange = (props: {
  open: boolean;
  setChangePasswordOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleChangePasswordSuccess = (props: {
  queryClient: QueryClient;
}) => Promise<void>;

type HandleLinkProviderButtonClick = (props: {
  providerId: string;
  setIsLinkingProvider: Dispatch<SetStateAction<string | null>>;
  tAccounts: _Translator;
}) => Promise<void>;

type HandleRefreshButtonClick = (props: {
  queryClient: QueryClient;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  tAccounts: _Translator;
}) => Promise<void>;

type HandleSetPasswordButtonClick = (props: {
  setSetPasswordOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleSetPasswordOpenChange = (props: {
  open: boolean;
  setSetPasswordOpen: Dispatch<SetStateAction<boolean>>;
}) => void;

type HandleSetPasswordSuccess = (props: {
  queryClient: QueryClient;
}) => Promise<void>;

type HandleUnlinkAccount = (props: {
  account: NonNullable<PendingUnlinkAccount>;
  queryClient: QueryClient;
  setCurrentUnlinkAccount: Dispatch<SetStateAction<PendingUnlinkAccount>>;
  setIsUnlinkingAccount: Dispatch<SetStateAction<boolean>>;
  tAccounts: _Translator;
  tErrors: _Translator;
}) => Promise<void>;

type HandleUnlinkAccountButtonClick = (props: {
  account: NonNullable<PendingUnlinkAccount>;
  setAlertDialogAction: Dispatch<SetStateAction<AlertDialogAction>>;
  setAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentUnlinkAccount: Dispatch<SetStateAction<PendingUnlinkAccount>>;
}) => void;

export type {
  AccountsHandlersProps,
  AccountsHandlersReturn,
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandleChangePasswordButtonClick,
  HandleChangePasswordOpenChange,
  HandleChangePasswordSuccess,
  HandleLinkProviderButtonClick,
  HandleRefreshButtonClick,
  HandleSetPasswordButtonClick,
  HandleSetPasswordOpenChange,
  HandleSetPasswordSuccess,
  HandleUnlinkAccount,
  HandleUnlinkAccountButtonClick,
};

// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
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
} from "./types/accounts.handlers.types";

const handleAlertDialogAction: HandleAlertDialogAction = async ({
  alertDialogAction,
  currentUnlinkAccount,
  queryClient,
  setAlertDialogAction,
  setAlertDialogOpen,
  setCurrentUnlinkAccount,
  setIsUnlinkingAccount,
  tAccounts,
  tErrors,
}) => {
  setAlertDialogOpen(false);
  setAlertDialogAction(null);

  if (alertDialogAction === "unlinkAccount" && currentUnlinkAccount) {
    await handleUnlinkAccount({
      account: currentUnlinkAccount,
      queryClient,
      setCurrentUnlinkAccount,
      setIsUnlinkingAccount,
      tAccounts,
      tErrors,
    });
  }
};

const handleAlertDialogOpenChange: HandleAlertDialogOpenChange = ({
  open,
  setAlertDialogAction,
  setAlertDialogOpen,
  setCurrentUnlinkAccount,
}) => {
  setAlertDialogOpen(open);

  if (!open) {
    setAlertDialogAction(null);
    setCurrentUnlinkAccount(null);
  }
};

const handleChangePasswordButtonClick: HandleChangePasswordButtonClick = ({
  setChangePasswordOpen,
}) => {
  setChangePasswordOpen(true);
};

const handleChangePasswordOpenChange: HandleChangePasswordOpenChange = ({
  open,
  setChangePasswordOpen,
}) => {
  setChangePasswordOpen(open);
};

const handleChangePasswordSuccess: HandleChangePasswordSuccess = async ({
  queryClient,
}) => {
  await queryClient.refetchQueries({ queryKey: ["accounts"] });
};

const handleLinkProviderButtonClick: HandleLinkProviderButtonClick = async ({
  providerId,
  setIsLinkingProvider,
  tAccounts,
}) => {
  setIsLinkingProvider(providerId);

  try {
    await authClient.linkSocial({
      provider: providerId,
      callbackURL: "/user/settings/accounts",
      errorCallbackURL: "/user/settings/accounts",
    });
  } catch (error) {
    console.error("Error linking provider:", error);
    toast.error(tAccounts("handlers.link.error", { provider: providerId }));
  } finally {
    setIsLinkingProvider(null);
  }
};

const handleRefreshButtonClick: HandleRefreshButtonClick = async ({
  queryClient,
  setIsRefreshing,
  tAccounts,
}) => {
  setIsRefreshing(true);

  try {
    await queryClient.refetchQueries({ queryKey: ["accounts"] });
  } catch (error) {
    console.error("Error refreshing accounts:", error);
    toast.error(tAccounts("handlers.refresh.error"));
  } finally {
    setIsRefreshing(false);
  }
};

const handleSetPasswordButtonClick: HandleSetPasswordButtonClick = ({
  setSetPasswordOpen,
}) => {
  setSetPasswordOpen(true);
};

const handleSetPasswordOpenChange: HandleSetPasswordOpenChange = ({
  open,
  setSetPasswordOpen,
}) => {
  setSetPasswordOpen(open);
};

const handleSetPasswordSuccess: HandleSetPasswordSuccess = async ({
  queryClient,
}) => {
  await queryClient.refetchQueries({ queryKey: ["accounts"] });
};

const handleUnlinkAccount: HandleUnlinkAccount = async ({
  account,
  queryClient,
  setCurrentUnlinkAccount,
  setIsUnlinkingAccount,
  tAccounts,
  tErrors,
}) => {
  setIsUnlinkingAccount(true);

  try {
    const { error } = await authClient.unlinkAccount({
      providerId: account.providerId,
      accountId: account.accountId,
    });

    if (error) {
      if (error.code && tErrors.has(error.code)) {
        toast.error(tErrors(error.code));
        return;
      }

      toast.error(tAccounts("handlers.unlink.error"));
      return;
    }

    await queryClient.refetchQueries({ queryKey: ["accounts"] });
    toast.success(tAccounts("handlers.unlink.success"));
  } catch (error) {
    console.error("Error unlinking account:", error);
    toast.error(tAccounts("handlers.unlink.error"));
  } finally {
    setCurrentUnlinkAccount(null);
    setIsUnlinkingAccount(false);
  }
};

const handleUnlinkAccountButtonClick: HandleUnlinkAccountButtonClick = ({
  account,
  setAlertDialogAction,
  setAlertDialogOpen,
  setCurrentUnlinkAccount,
}) => {
  setCurrentUnlinkAccount(account);
  setAlertDialogAction("unlinkAccount");
  setAlertDialogOpen(true);
};

const AccountsHandlers = ({
  alertDialogAction,
  currentUnlinkAccount,
  queryClient,
  setAlertDialogAction,
  setAlertDialogOpen,
  setChangePasswordOpen,
  setCurrentUnlinkAccount,
  setIsRefreshing,
  setIsLinkingProvider,
  setIsUnlinkingAccount,
  setSetPasswordOpen,
  tAccounts,
  tErrors,
}: AccountsHandlersProps): AccountsHandlersReturn => {
  return {
    handleAlertDialogAction: () =>
      handleAlertDialogAction({
        alertDialogAction,
        currentUnlinkAccount,
        queryClient,
        setAlertDialogAction,
        setAlertDialogOpen,
        setCurrentUnlinkAccount,
        setIsUnlinkingAccount,
        tAccounts,
        tErrors,
      }),
    handleAlertDialogOpenChange: (open) =>
      handleAlertDialogOpenChange({
        open,
        setAlertDialogAction,
        setAlertDialogOpen,
        setCurrentUnlinkAccount,
      }),
    handleChangePasswordButtonClick: () =>
      handleChangePasswordButtonClick({
        setChangePasswordOpen,
      }),
    handleChangePasswordOpenChange: (open) =>
      handleChangePasswordOpenChange({
        open,
        setChangePasswordOpen,
      }),
    handleChangePasswordSuccess: () =>
      handleChangePasswordSuccess({
        queryClient,
      }),
    handleLinkProviderButtonClick: (providerId) =>
      handleLinkProviderButtonClick({
        providerId,
        setIsLinkingProvider,
        tAccounts,
      }),
    handleRefreshButtonClick: () =>
      handleRefreshButtonClick({
        queryClient,
        setIsRefreshing,
        tAccounts,
      }),
    handleSetPasswordButtonClick: () =>
      handleSetPasswordButtonClick({
        setSetPasswordOpen,
      }),
    handleSetPasswordOpenChange: (open) =>
      handleSetPasswordOpenChange({
        open,
        setSetPasswordOpen,
      }),
    handleSetPasswordSuccess: () =>
      handleSetPasswordSuccess({
        queryClient,
      }),
    handleUnlinkAccountButtonClick: (account) =>
      handleUnlinkAccountButtonClick({
        account,
        setAlertDialogAction,
        setAlertDialogOpen,
        setCurrentUnlinkAccount,
      }),
  };
};

export { AccountsHandlers };

// Vendors
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useFormatter, useNow, useTranslations } from "next-intl";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// Actions
import { getSocialProviders } from "@/actions/auth/get-social-providers/get-social-providers.action";
// API
import { listAccounts } from "../api/list-accounts/list-accounts.api";
// Handlers
import { AccountsHandlers } from "../handlers/accounts.handlers";
// i18n
import { useRouter } from "@/i18n/navigation";
// Types
import type {
  AlertDialogAction,
  PendingUnlinkAccount,
} from "../types/accounts.types";
// Utils
import { getCanUnlinkAccount } from "../utils/get-can-unlink-account/get-can-unlink-account.util";
import { getCredentialAccount } from "../utils/get-credential-account/get-credential-account.util";
import { getProvidersWithAccounts } from "../utils/get-providers-with-accounts/get-providers-with-accounts.util";

const AccountsHook = () => {
  const [alertDialogAction, setAlertDialogAction] =
    useState<AlertDialogAction>(null);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [currentUnlinkAccount, setCurrentUnlinkAccount] =
    useState<PendingUnlinkAccount>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLinkingProvider, setIsLinkingProvider] = useState<string | null>(
    null,
  );
  const [isUnlinkingAccount, setIsUnlinkingAccount] = useState(false);
  const [setPasswordOpen, setSetPasswordOpen] = useState(false);

  const format = useFormatter();
  const now = useNow();

  const router = useRouter();
  const searchParams = useSearchParams();

  const tAccounts = useTranslations("accountsSettings");
  const tErrors = useTranslations("root.errors");

  const queryClient = useQueryClient();

  const {
    data: providers = [],
    isLoading: isLoadingProviders,
    isError: isErrorProviders,
  } = useQuery({
    queryKey: ["providers"],
    queryFn: getSocialProviders,
    staleTime: 1000 * 60,
  });

  const {
    data: accounts = [],
    isLoading: isLoadingAccounts,
    isError: isErrorAccounts,
  } = useQuery({
    queryKey: ["accounts"],
    queryFn: listAccounts,
    staleTime: 1000 * 60,
  });

  const credentialAccount = getCredentialAccount({ accounts });
  const providersWithAccounts = getProvidersWithAccounts({
    accounts,
    providers,
  });

  const canUnlinkAccount = getCanUnlinkAccount({
    credentialAccount,
    providersWithAccounts,
  });

  const isLoading = isLoadingProviders || isLoadingAccounts;
  const isError = isErrorProviders || isErrorAccounts;

  useEffect(() => {
    const error = searchParams.get("error");

    if (!error) {
      return;
    }

    if (error === "account_already_linked_to_different_user") {
      toast.error(
        tAccounts(
          "hooks.accounts.errors.account_already_linked_to_different_user",
        ),
      );
    } else {
      toast.error(tAccounts("hooks.accounts.errors.generic"));
    }

    router.replace("/user/settings/accounts");
  }, [router, searchParams, tAccounts]);

  const {
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleChangePasswordButtonClick,
    handleChangePasswordOpenChange,
    handleChangePasswordSuccess,
    handleLinkProviderButtonClick,
    handleRefreshButtonClick,
    handleSetPasswordButtonClick,
    handleSetPasswordOpenChange,
    handleSetPasswordSuccess,
    handleUnlinkAccountButtonClick,
  } = AccountsHandlers({
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
  });

  return {
    alertDialogAction,
    alertDialogOpen,
    canUnlinkAccount,
    changePasswordOpen,
    credentialAccount,
    currentUnlinkAccount,
    format,
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleChangePasswordButtonClick,
    handleChangePasswordOpenChange,
    handleChangePasswordSuccess,
    handleLinkProviderButtonClick,
    handleRefreshButtonClick,
    handleSetPasswordButtonClick,
    handleSetPasswordOpenChange,
    handleSetPasswordSuccess,
    handleUnlinkAccountButtonClick,
    isError,
    isLinkingProvider,
    isLoading,
    isRefreshing,
    isUnlinkingAccount,
    now,
    providersWithAccounts,
    setPasswordOpen,
    t: tAccounts,
  };
};

export { AccountsHook };

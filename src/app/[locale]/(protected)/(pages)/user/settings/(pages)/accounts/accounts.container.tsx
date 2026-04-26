"use client";
// Vendors
import React from "react";
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
import { ButtonLoading } from "@/components/ui/button-loading";
import { ChangePassword } from "./components/change-password/change-password.component";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { AccountsError } from "./components/accounts-error/accounts-error.component";
import { AccountsSkeleton } from "./components/accounts-skeleton/accounts-skeleton.component";
import { SetPassword } from "./components/set-password/set-password.component";
// Hooks
import { useAccounts } from "./hooks/use-accounts.hook";
// Icons
import { KeyRound } from "lucide-react";
// Utils
import { getAccountIcon } from "./utils/get-account-icon/get-account-icon.util";

const AccountsContainer = () => {
  const {
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
    t,
  } = useAccounts();

  if (isLoading) {
    return <AccountsSkeleton />;
  }

  if (isError) {
    return <AccountsError />;
  }

  return (
    <React.Fragment>
      <ItemGroup>
        <Item className="mt-4 p-0">
          <ItemContent className="min-w-48">
            <ItemTitle>{t("container.header.title")}</ItemTitle>
            <ItemDescription>
              {t("container.header.description")}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ButtonLoading
              disabled={isRefreshing || isUnlinkingAccount}
              loading={isRefreshing}
              onClick={handleRefreshButtonClick}
              variant="outline"
            >
              {t("container.header.actions.refreshButton.label")}
            </ButtonLoading>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item className="p-0">
          <ItemMedia variant="icon">
            <KeyRound className="text-muted-foreground size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{t("container.credential.title")}</ItemTitle>
            <ItemDescription>
              {credentialAccount
                ? t("container.credential.description.connected", {
                    email: credentialAccount?.profile.email ?? "",
                    createdAt: credentialAccount.createdAt,
                    lastUsed: format.relativeTime(
                      credentialAccount.updatedAt,
                      now,
                    ),
                  })
                : t("container.credential.description.notConnected")}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            {credentialAccount ? (
              <ButtonLoading
                disabled={isRefreshing || isUnlinkingAccount}
                onClick={handleChangePasswordButtonClick}
                variant="outline"
              >
                {t("container.credential.actions.changePasswordButton.label")}
              </ButtonLoading>
            ) : (
              <ButtonLoading
                disabled={isRefreshing || isUnlinkingAccount}
                onClick={handleSetPasswordButtonClick}
                variant="outline"
              >
                {t("container.credential.actions.setPasswordButton.label")}
              </ButtonLoading>
            )}
          </ItemActions>
          <ChangePassword
            onOpenChange={handleChangePasswordOpenChange}
            onSuccess={handleChangePasswordSuccess}
            open={changePasswordOpen}
          />
          <SetPassword
            onOpenChange={handleSetPasswordOpenChange}
            onSuccess={handleSetPasswordSuccess}
            open={setPasswordOpen}
          />
        </Item>
        {providersWithAccounts.map((provider) => {
          const Icon = getAccountIcon({ providerId: provider.providerId });
          return (
            <React.Fragment key={provider.providerId}>
              <ItemSeparator />
              <Item className="p-0">
                <ItemMedia variant="icon">
                  <Icon className="text-muted-foreground size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {t(`container.provider.title.${provider.providerId}`)}
                  </ItemTitle>
                  <ItemDescription>
                    {t("container.provider.description", {
                      count: provider.accounts.length,
                    })}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ButtonLoading
                    disabled={isRefreshing || isUnlinkingAccount}
                    loading={isLinkingProvider === provider.providerId}
                    onClick={() =>
                      handleLinkProviderButtonClick(provider.providerId)
                    }
                    variant="outline"
                  >
                    {t("container.provider.actions.connectButton.label", {
                      hasAccounts: String(provider.accounts.length > 0),
                    })}
                  </ButtonLoading>
                </ItemActions>
              </Item>
              {provider.accounts.length > 0 && (
                <React.Fragment>
                  <ItemSeparator />
                  <div className="flex flex-col gap-8 pl-8">
                    {provider.accounts.map((account) => {
                      const isUnlinking =
                        currentUnlinkAccount?.providerId ===
                          account.providerId &&
                        currentUnlinkAccount?.accountId === account.accountId &&
                        isUnlinkingAccount;
                      return (
                        <Item key={account.accountId} className="p-0">
                          <ItemContent>
                            <ItemTitle>{account.profile.email}</ItemTitle>
                            <ItemDescription>
                              {t(
                                `container.provider.account.description.${account.providerId}`,
                                {
                                  createdAt: account.createdAt,
                                  lastUsed: format.relativeTime(
                                    account.updatedAt,
                                    now,
                                  ),
                                },
                              )}
                            </ItemDescription>
                          </ItemContent>
                          <ItemActions>
                            <ButtonLoading
                              disabled={
                                isRefreshing ||
                                isUnlinking ||
                                isUnlinkingAccount ||
                                !canUnlinkAccount
                              }
                              loading={isUnlinking}
                              onClick={() =>
                                handleUnlinkAccountButtonClick({
                                  providerId: account.providerId,
                                  accountId: account.accountId,
                                })
                              }
                              variant="destructive"
                            >
                              {t(
                                "container.provider.account.actions.unlinkButton.label",
                              )}
                            </ButtonLoading>
                          </ItemActions>
                        </Item>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          );
        })}
      </ItemGroup>
      {alertDialogAction && (
        <AlertDialog
          open={alertDialogOpen}
          onOpenChange={handleAlertDialogOpenChange}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {t(`container.alertDialog.${alertDialogAction}.title`)}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {t(`container.alertDialog.${alertDialogAction}.description`)}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                {t(
                  `container.alertDialog.${alertDialogAction}.cancelButton.label`,
                )}
              </AlertDialogCancel>
              <AlertDialogAction
                disabled={isRefreshing || isUnlinkingAccount}
                onClick={handleAlertDialogAction}
              >
                {t(
                  `container.alertDialog.${alertDialogAction}.actionButton.label`,
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </React.Fragment>
  );
};

export { AccountsContainer };

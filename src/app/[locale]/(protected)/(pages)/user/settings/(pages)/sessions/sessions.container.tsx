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
import { Badge } from "@/components/ui/badge";
import { ButtonLoading } from "@/components/ui/button-loading";
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
import { SessionsEmpty } from "./components/sessions-empty/sessions-empty.component";
import { SessionsError } from "./components/sessions-error/sessions-error.component";
import { SessionsSkeleton } from "./components/sessions-skeleton/sessions-skeleton.component";
// Hooks
import { SessionsHook } from "./hooks/sessions.hook";
// Utils
import { getDeviceIcon } from "./utils/get-device-icon/get-device-icon.util";

const SessionsContainer = () => {
  const {
    alertDialogAction,
    alertDialogOpen,
    enrichedSessions,
    format,
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleRefreshButtonClick,
    handleRevokeSessionButtonClick,
    handleRevokeOtherSessionsButtonClick,
    handleSignOutButtonClick,
    hasOtherSessions,
    isEmpty,
    isError,
    isLoading,
    isRefreshing,
    isRevokingOtherSessions,
    isSigningOut,
    now,
    revokingToken,
    t,
  } = SessionsHook();

  if (isLoading) {
    return <SessionsSkeleton />;
  }

  if (isError) {
    return <SessionsError />;
  }

  if (isEmpty) {
    return <SessionsEmpty />;
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
              disabled={isRefreshing || isRevokingOtherSessions || isSigningOut}
              loading={isRefreshing}
              onClick={handleRefreshButtonClick}
              variant="outline"
            >
              {t("container.header.actions.refreshButton.label")}
            </ButtonLoading>
            <ButtonLoading
              disabled={
                !hasOtherSessions ||
                isRefreshing ||
                isRevokingOtherSessions ||
                isSigningOut
              }
              loading={isRevokingOtherSessions}
              onClick={handleRevokeOtherSessionsButtonClick}
              variant="outline"
            >
              {t("container.header.actions.revokeOtherSessions.label")}
            </ButtonLoading>
          </ItemActions>
        </Item>
        <ItemSeparator />

        {enrichedSessions.map(({ userAgent, isCurrent, session }) => {
          const isRevoking = revokingToken === session.token;
          const Icon = getDeviceIcon({ deviceType: userAgent.device.type });

          return (
            <React.Fragment key={session.id}>
              <Item className="p-0">
                <ItemMedia variant="icon">
                  <Icon className="text-muted-foreground size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    <span>
                      {t("container.session.title.default", {
                        browser:
                          userAgent.browser.name ??
                          t("container.session.title.unknown.browser"),
                        os:
                          userAgent.os.name ??
                          t("container.session.title.unknown.os"),
                      })}
                    </span>
                    {isCurrent && (
                      <Badge variant="secondary">
                        {t("container.session.title.current")}
                      </Badge>
                    )}
                  </ItemTitle>
                  <ItemDescription>
                    {t("container.session.description", {
                      lastActive: format.relativeTime(session.updatedAt, now),
                      expiresAt: format.relativeTime(session.expiresAt, now),
                    })}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  {isCurrent ? (
                    <ButtonLoading
                      disabled={
                        isRefreshing || isRevokingOtherSessions || isSigningOut
                      }
                      loading={isSigningOut}
                      onClick={handleSignOutButtonClick}
                      variant="destructive"
                    >
                      {t("container.session.actions.signOutButton.label")}
                    </ButtonLoading>
                  ) : (
                    <ButtonLoading
                      disabled={
                        isRefreshing ||
                        isRevoking ||
                        isRevokingOtherSessions ||
                        isSigningOut
                      }
                      loading={isRevoking}
                      onClick={() =>
                        handleRevokeSessionButtonClick(session.token)
                      }
                      variant="outline"
                    >
                      {t("container.session.actions.revokeButton.label")}
                    </ButtonLoading>
                  )}
                </ItemActions>
              </Item>
              <ItemSeparator />
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
                disabled={isRevokingOtherSessions || isSigningOut}
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

export { SessionsContainer };

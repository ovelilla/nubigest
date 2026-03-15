"use client";
import React from "react";
// Components
import { SessionsPanel } from "./components/active-sessions/active-sessions.component";
import { Button } from "@/components/ui/button";
import { DisableTwoFactor } from "./components/wizards/disable-two-factor/disable-two-factor.component";
import { EnableTwoFactor } from "./components/wizards/enable-two-factor/enable-two-factor.component";
import { GenerateBackupCodes } from "./components/wizards/generate-backup-codes/generate-backup-codes.component";
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
import { SecurityContainerSkeleton } from "./components/security-container-skeleton/security-container-skeleton.component";
import { SetupAuthenticatorApp } from "./components/wizards/setup-authenticator-app/setup-authenticator-app.component";
import { Switch } from "@/components/ui/switch";
import { ViewBackupCodes } from "./components/wizards/view-backup-codes/view-backup-codes.component";
// Hooks
import { SecurityContainerHook } from "./hooks/security.container.hook";
// Icons
import {
  Check,
  KeyRound,
  Mail,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const SecurityContainer = () => {
  const {
    disableTwoFactorOpen,
    enableTwoFactorOpen,
    generateBackupCodesOpen,
    handleDisableTwoFactorOpenChange,
    handleEnableTwoFactorOpenChange,
    handleGenerateBackupCodesClick,
    handleGenerateBackupCodesOpenChange,
    handleSetupAuthenticatorAppClick,
    handleSetupAuthenticatorAppOpenChange,
    handleToggleTwoFactor,
    handleViewBackupCodesClick,
    handleViewBackupCodesOpenChange,
    isPendingSession,
    isTwoFactorEnabled,
    setupAuthenticatorAppOpen,
    t,
    viewBackupCodesOpen,
  } = SecurityContainerHook();

  if (isPendingSession) {
    return <SecurityContainerSkeleton />;
  }

  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="icon">
          {isTwoFactorEnabled ? (
            <ShieldCheck className="size-6" />
          ) : (
            <ShieldAlert className="size-6" />
          )}
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            {isTwoFactorEnabled
              ? t("container.score.title.enabled")
              : t("container.score.title.disabled")}
          </ItemTitle>
          <ItemDescription>
            {isTwoFactorEnabled
              ? t("container.score.description.enabled")
              : t("container.score.description.disabled")}
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item className="mt-4 p-0">
        <ItemContent>
          <ItemTitle>
            <h2>{t("container.twoFactorAuthentication.title")}</h2>
          </ItemTitle>
          <ItemDescription className="text-sm">
            {isTwoFactorEnabled
              ? t("container.twoFactorAuthentication.description.enabled")
              : t("container.twoFactorAuthentication.description.disabled")}
          </ItemDescription>
        </ItemContent>
        <ItemActions className="flex items-center gap-2">
          <Switch
            checked={isTwoFactorEnabled}
            disabled={disableTwoFactorOpen || enableTwoFactorOpen}
            onCheckedChange={handleToggleTwoFactor}
          />
        </ItemActions>
        <DisableTwoFactor
          onOpenChange={handleDisableTwoFactorOpenChange}
          open={disableTwoFactorOpen}
        />
        <EnableTwoFactor
          onOpenChange={handleEnableTwoFactorOpenChange}
          open={enableTwoFactorOpen}
        />
      </Item>
      <ItemSeparator />
      {isTwoFactorEnabled && (
        <React.Fragment>
          <Item className="p-0">
            <ItemMedia variant="icon">
              <Mail className="text-muted-foreground size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                <h3>{t("container.emailVerification.title")}</h3>
              </ItemTitle>
              <ItemDescription>
                {t("container.emailVerification.description")}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Check className="text-muted-foreground size-5" />
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item className="p-0">
            <ItemMedia variant="icon">
              <Smartphone className="text-muted-foreground size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                <h3>{t("container.authenticatorApp.title")}</h3>
              </ItemTitle>
              <ItemDescription>
                {t("container.authenticatorApp.description")}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                onClick={handleSetupAuthenticatorAppClick}
                variant="outline"
              >
                {t("container.authenticatorApp.actions.setupButton.label")}
              </Button>
            </ItemActions>
            <SetupAuthenticatorApp
              open={setupAuthenticatorAppOpen}
              onOpenChange={handleSetupAuthenticatorAppOpenChange}
            />
          </Item>
          <ItemSeparator />
          <Item className="p-0">
            <ItemMedia variant="icon">
              <KeyRound className="text-muted-foreground size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                <h3>{t("container.backupCodes.title")}</h3>
              </ItemTitle>
              <ItemDescription>
                {t("container.backupCodes.description")}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button onClick={handleGenerateBackupCodesClick}>
                {t("container.backupCodes.actions.generateButton.label")}
              </Button>
              <Button onClick={handleViewBackupCodesClick} variant="outline">
                {t("container.backupCodes.actions.viewButton.label")}
              </Button>
            </ItemActions>
            <GenerateBackupCodes
              open={generateBackupCodesOpen}
              onOpenChange={handleGenerateBackupCodesOpenChange}
            />
            <ViewBackupCodes
              open={viewBackupCodesOpen}
              onOpenChange={handleViewBackupCodesOpenChange}
            />
          </Item>
        </React.Fragment>
      )}
      <ItemSeparator />
      <SessionsPanel />
    </ItemGroup>
  );
};

export { SecurityContainer };

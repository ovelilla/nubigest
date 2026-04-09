"use client";
// Vendors
import React from "react";
// Components
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
import { TwoFactorSkeleton } from "./components/two-factor-skeleton/two-factor-skeleton.component";
import { SetupAuthenticatorApp } from "./components/wizards/setup-authenticator-app/setup-authenticator-app.component";
import { Switch } from "@/components/ui/switch";
import { ViewBackupCodes } from "./components/wizards/view-backup-codes/view-backup-codes.component";
// Hooks
import { useTwoFactor } from "./hooks/use-two-factor.hook";
// Icons
import { Check, KeyRound, Mail, Smartphone } from "lucide-react";

const TwoFactor = () => {
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
  } = useTwoFactor();

  if (isPendingSession) {
    return <TwoFactorSkeleton />;
  }

  return (
    <ItemGroup>
      <Item className="p-0">
        <ItemContent>
          <ItemTitle>
            <h2>{t("ui.twoFactorAuthentication.title")}</h2>
          </ItemTitle>
          <ItemDescription className="text-sm">
            {isTwoFactorEnabled
              ? t("ui.twoFactorAuthentication.description.enabled")
              : t("ui.twoFactorAuthentication.description.disabled")}
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
      {isTwoFactorEnabled && (
        <React.Fragment>
          <ItemSeparator />
          <Item className="p-0">
            <ItemMedia variant="icon">
              <Mail className="text-muted-foreground size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                <h3>{t("ui.emailVerification.title")}</h3>
              </ItemTitle>
              <ItemDescription>
                {t("ui.emailVerification.description")}
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
                <h3>{t("ui.authenticatorApp.title")}</h3>
              </ItemTitle>
              <ItemDescription>
                {t("ui.authenticatorApp.description")}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                onClick={handleSetupAuthenticatorAppClick}
                variant="outline"
              >
                {t("ui.authenticatorApp.actions.setupButton.label")}
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
                <h3>{t("ui.backupCodes.title")}</h3>
              </ItemTitle>
              <ItemDescription>
                {t("ui.backupCodes.description")}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button onClick={handleGenerateBackupCodesClick}>
                {t("ui.backupCodes.actions.generateButton.label")}
              </Button>
              <Button onClick={handleViewBackupCodesClick} variant="outline">
                {t("ui.backupCodes.actions.viewButton.label")}
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
    </ItemGroup>
  );
};

export { TwoFactor };

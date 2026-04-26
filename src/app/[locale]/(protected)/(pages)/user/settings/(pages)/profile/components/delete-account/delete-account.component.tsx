"use client";
// Vendors
import React from "react";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConfirmOAuthDialog } from "./components/confirm-oauth-dialog/confirm-oauth-dialog.component";
import { ConfirmPasswordDialog } from "./components/confirm-password-dialog/confirm-password-dialog.component";
import { DeleteAccountSkeleton } from "./components/delete-account-skeleton/delete-account-skeleton.component";
// Hooks
import { useDeleteAccount } from "./hook/use-delete-account.hook";

const DeleteAccount = () => {
  const {
    form,
    handleDeleteClick,
    handleDialogOpenChange,
    handleOAuthDialogOpenChange,
    handleOAuthDialogSubmit,
    handleSubmit,
    isAccountsPending,
    isDeleting,
    isDialogOpen,
    isOAuthDialogOpen,
    t,
  } = useDeleteAccount();

  if (isAccountsPending) {
    return <DeleteAccountSkeleton />;
  }

  return (
    <React.Fragment>
      <Card className="ring-destructive/20 pb-0">
        <CardHeader>
          <CardTitle>
            <h2>{t("ui.card.header.title")}</h2>
          </CardTitle>
          <CardDescription>{t("ui.card.header.description")}</CardDescription>
        </CardHeader>
        <CardFooter className="border-destructive/20 justify-end border-t px-6 pb-4 [.border-t]:pt-4">
          <ButtonLoading
            loading={isDeleting}
            onClick={handleDeleteClick}
            type="button"
            variant="destructive"
          >
            {t("ui.card.footer.deleteButton.label")}
          </ButtonLoading>
        </CardFooter>
      </Card>
      <ConfirmPasswordDialog
        form={form}
        isOpen={isDialogOpen}
        onOpenChange={handleDialogOpenChange}
        onSubmit={handleSubmit}
        t={t}
      />
      <ConfirmOAuthDialog
        isDeleting={isDeleting}
        isOpen={isOAuthDialogOpen}
        onOpenChange={handleOAuthDialogOpenChange}
        onSubmit={handleOAuthDialogSubmit}
      />
    </React.Fragment>
  );
};

export { DeleteAccount };

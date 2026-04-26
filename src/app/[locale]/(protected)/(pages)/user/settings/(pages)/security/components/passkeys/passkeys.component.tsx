"use client";
// Vendors
import React from "react";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { PasskeyItem } from "./components/passkey-item/passkey-item.component";
import { PasskeysSkeleton } from "./components/passkeys-skeleton/passkeys-skeleton.component";
// Hooks
import { usePasskeys } from "./hooks/use-passkeys.hook";

const Passkeys = () => {
  const {
    deletingPasskeyId,
    editingPasskey,
    form,
    handleAddPasskey,
    handleCancelRenamePasskey,
    handleDeletePasskey,
    handleStartRenamePasskey,
    handleSubmit,
    hasPasskeys,
    isAddingPasskey,
    isLoadingPasskeys,
    isPendingSession,
    passkeys,
    t,
  } = usePasskeys();

  if (isPendingSession || isLoadingPasskeys) {
    return <PasskeysSkeleton />;
  }

  return (
    <ItemGroup>
      <Item className="p-0">
        <ItemContent>
          <ItemTitle>
            <h2>{t("ui.title")}</h2>
          </ItemTitle>
          <ItemDescription>{t("ui.description")}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ButtonLoading
            loading={isAddingPasskey}
            onClick={handleAddPasskey}
            variant="outline"
          >
            {t("ui.actions.addButton.label")}
          </ButtonLoading>
        </ItemActions>
      </Item>
      {hasPasskeys && (
        <React.Fragment>
          <ItemSeparator />
          <div className="flex flex-col gap-8">
            {passkeys.map((passkey) => (
              <PasskeyItem
                deletingPasskeyId={deletingPasskeyId}
                editingPasskey={editingPasskey}
                form={form}
                key={passkey.id}
                onCancelRename={handleCancelRenamePasskey}
                onDelete={handleDeletePasskey}
                onStartRename={handleStartRenamePasskey}
                onSubmit={handleSubmit}
                passkey={passkey}
                t={t}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </ItemGroup>
  );
};

export { Passkeys };

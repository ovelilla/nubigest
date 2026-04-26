"use client";
// Vendors
import React from "react";
import { Controller } from "react-hook-form";
// Components
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
// Icons
import { UserRoundKey } from "lucide-react";
// Types
import type { PasskeyItemProps } from "./types/passkey-item.component.types";

const PasskeyItem = ({
  deletingPasskeyId,
  editingPasskey,
  form,
  onCancelRename,
  onDelete,
  onStartRename,
  onSubmit,
  passkey,
  t,
}: PasskeyItemProps) => {
  const isEditing = editingPasskey?.id === passkey.id;

  return (
    <Item className="p-0">
      <ItemMedia variant="icon">
        <UserRoundKey className="text-muted-foreground size-5" />
      </ItemMedia>
      <ItemContent>
        {isEditing ? (
          <form id={passkey.id} onSubmit={form.handleSubmit(onSubmit)}>
            <FieldSet disabled={form.formState.isSubmitting}>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      {t("ui.passkey.form.name.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoFocus
                      className="max-w-sm grow-0"
                      id={field.name}
                      placeholder={t("ui.passkey.form.name.placeholder")}
                      type="text"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldSet>
          </form>
        ) : (
          <ItemTitle>
            <h3>{passkey.name ?? t("ui.passkey.title")}</h3>
          </ItemTitle>
        )}
        <ItemDescription>
          {t("ui.passkey.description", { createdAt: passkey.createdAt })}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        {isEditing ? (
          <React.Fragment>
            <Button
              disabled={form.formState.isSubmitting}
              onClick={onCancelRename}
              variant="outline"
            >
              {t("ui.passkey.form.actions.cancelButton.label")}
            </Button>
            <ButtonLoading
              disabled={!form.formState.isDirty}
              form={passkey.id}
              loading={form.formState.isSubmitting}
              type="submit"
            >
              {t("ui.passkey.form.actions.submitButton.label")}
            </ButtonLoading>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button variant="outline" onClick={() => onStartRename(passkey)}>
              {t("ui.passkey.actions.renameButton.label")}
            </Button>
            <ButtonLoading
              loading={deletingPasskeyId === passkey.id}
              onClick={() => onDelete(passkey.id)}
              variant="destructive"
            >
              {t("ui.passkey.actions.deleteButton.label")}
            </ButtonLoading>
          </React.Fragment>
        )}
      </ItemActions>
    </Item>
  );
};

export { PasskeyItem };

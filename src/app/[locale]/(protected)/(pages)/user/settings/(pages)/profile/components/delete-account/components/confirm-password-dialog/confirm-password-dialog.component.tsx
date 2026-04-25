"use client";
// Vendors
import { Controller } from "react-hook-form";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { PasswordInput } from "@/components/password-input/password-input.component";
// Types
import type { ConfirmPasswordDialogProps } from "./types/confirm-password-dialog.component.types";

const ConfirmPasswordDialog = ({
  form,
  isOpen,
  onOpenChange,
  onSubmit,
  t,
}: ConfirmPasswordDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("ui.dialog.content.header.title")}</DialogTitle>
          <DialogDescription>
            {t("ui.dialog.content.header.description")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet disabled={form.formState.isSubmitting}>
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("ui.dialog.content.form.password.label")}
                  </FieldLabel>
                  <PasswordInput
                    {...field}
                    aria-invalid={fieldState.invalid}
                    autoComplete="current-password"
                    id={field.name}
                    placeholder={t(
                      "ui.dialog.content.form.password.placeholder",
                    )}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <ButtonLoading
              loading={form.formState.isSubmitting}
              type="submit"
              variant="destructive"
            >
              {t("ui.dialog.content.form.submitButton.label")}
            </ButtonLoading>
          </FieldSet>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { ConfirmPasswordDialog };

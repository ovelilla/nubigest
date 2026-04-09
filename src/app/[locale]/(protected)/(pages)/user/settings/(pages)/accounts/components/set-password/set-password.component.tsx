"use client";
// Vendors
import { Controller } from "react-hook-form";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Field, FieldLabel, FieldError, FieldSet } from "@/components/ui/field";
import { PasswordInput } from "@/components/password-input/password-input.component";
import {
  PasswordStrength,
  PasswordStrengthBar,
  PasswordStrengthRules,
  PasswordStrengthRule,
} from "@/components/password-strength";
import { Skeleton } from "@/components/ui/skeleton";
// Hooks
import { SetPasswordHook } from "./hooks/set-password.hook";
// Types
import type { SetPasswordProps } from "./types/set-password.component.types";

const SetPassword = ({ onOpenChange, onSuccess, open }: SetPasswordProps) => {
  const {
    form,
    handleDialogOpenChange,
    handleSubmit,
    isPendingSession,
    sessionData,
    t,
  } = SetPasswordHook({
    onOpenChange,
    onSuccess,
  });

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      {isPendingSession ? (
        <DialogContent>
          <DialogHeader>
            <Skeleton className="h-4 w-full max-w-32" />
            <Skeleton className="h-4 w-full max-w-72" />
          </DialogHeader>
          <FieldSet>
            <Field>
              <FieldLabel>
                <Skeleton className="h-4 w-full max-w-48" />
              </FieldLabel>
              <Skeleton className="h-9 w-full" />
            </Field>
            <Skeleton className="h-9 w-full" />
          </FieldSet>
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("ui.dialog.content.header.title")}</DialogTitle>
            <DialogDescription>
              {t("ui.dialog.content.header.description", {
                email: sessionData?.user.email ?? "",
              })}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                      autoComplete="new-password"
                      id={field.name}
                      placeholder={t(
                        "ui.dialog.content.form.password.placeholder",
                      )}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                    {field.value && (
                      <PasswordStrength value={field.value}>
                        <PasswordStrengthBar />
                        <PasswordStrengthRules>
                          <PasswordStrengthRule rule="length">
                            {t("ui.dialog.content.form.password.rules.length")}
                          </PasswordStrengthRule>
                          <PasswordStrengthRule rule="number">
                            {t("ui.dialog.content.form.password.rules.number")}
                          </PasswordStrengthRule>
                          <PasswordStrengthRule rule="uppercase">
                            {t(
                              "ui.dialog.content.form.password.rules.uppercase",
                            )}
                          </PasswordStrengthRule>
                          <PasswordStrengthRule rule="special">
                            {t("ui.dialog.content.form.password.rules.special")}
                          </PasswordStrengthRule>
                        </PasswordStrengthRules>
                      </PasswordStrength>
                    )}
                  </Field>
                )}
              />
              <ButtonLoading
                type="submit"
                loading={form.formState.isSubmitting}
              >
                {t("ui.dialog.content.form.submitButton.label")}
              </ButtonLoading>
            </FieldSet>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
};

export { SetPassword };

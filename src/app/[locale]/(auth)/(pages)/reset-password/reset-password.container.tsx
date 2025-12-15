"use client";
// Vendors
import { Controller } from "react-hook-form";
// Components
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/auth-card/auth-card.component";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { PasswordInput } from "@/components/password-input/password-input.component";
import {
  PasswordStrength,
  PasswordStrengthBar,
  PasswordStrengthRules,
  PasswordStrengthRule,
} from "@/components/password-strength";
// Hooks
import { ResetPasswordHook } from "./hooks/reset-password.hook";
// i18n
import { Link } from "@/i18n/navigation";
// Types
import type { ResetPasswordContainerProps } from "./types/reset-password.container.types";

const ResetPasswordContainer = ({
  error,
  token,
}: ResetPasswordContainerProps) => {
  const { form, isInvalidToken, handleSubmit, loading, t } = ResetPasswordHook({
    error,
    token,
  });

  if (isInvalidToken) {
    return (
      <AuthCard>
        <AuthCardHeader>
          <AuthCardTitle>{t("page.error.card.header.title")}</AuthCardTitle>
          <AuthCardDescription>
            {t("page.error.card.header.description")}
          </AuthCardDescription>
        </AuthCardHeader>
        <AuthCardFooter>
          <Link href="/forgot-password" prefetch={false}>
            {t("page.error.card.footer.requestLink.label")}
          </Link>
        </AuthCardFooter>
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>{t("page.card.header.title")}</AuthCardTitle>
        <AuthCardDescription>
          {t("page.card.header.description")}
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("page.card.content.form.password.label")}
                  </FieldLabel>
                  <PasswordInput
                    {...field}
                    aria-invalid={fieldState.invalid}
                    autoComplete="new-password"
                    disabled={loading}
                    id={field.name}
                    placeholder={t(
                      "page.card.content.form.password.placeholder",
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
                          {t("page.card.content.form.password.rules.length")}
                        </PasswordStrengthRule>
                        <PasswordStrengthRule rule="number">
                          {t("page.card.content.form.password.rules.number")}
                        </PasswordStrengthRule>
                        <PasswordStrengthRule rule="uppercase">
                          {t("page.card.content.form.password.rules.uppercase")}
                        </PasswordStrengthRule>
                        <PasswordStrengthRule rule="special">
                          {t("page.card.content.form.password.rules.special")}
                        </PasswordStrengthRule>
                      </PasswordStrengthRules>
                    </PasswordStrength>
                  )}
                </Field>
              )}
            />
          </div>
          <ButtonLoading type="submit" loading={loading}>
            {t("page.card.content.form.submitButton.label")}
          </ButtonLoading>
        </form>
      </AuthCardContent>
      <AuthCardFooter>
        <Link className="text-muted-foreground" href="/signin" prefetch={false}>
          {t("page.card.footer.signinLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { ResetPasswordContainer };

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
import { Input } from "@/components/ui/input";
import { OAuthButtons } from "@/components/oauth-buttons/oauth-buttons.component";
import { PasswordInput } from "@/components/password-input/password-input.component";
import {
  PasswordStrength,
  PasswordStrengthBar,
  PasswordStrengthRules,
  PasswordStrengthRule,
} from "@/components/password-strength";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
// Constants
import { OAUTH_PROVIDERS } from "./constants/signup.constants";
// Hooks
import { SignUpHook } from "./hooks/signup.hook";
// i18n
import { Link } from "@/i18n/navigation";

const SignUpContainer = () => {
  const { form, handleOAuthClick, handleSubmit, loading, t } = SignUpHook();

  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>{t("page.card.header.title")}</AuthCardTitle>
        <AuthCardDescription>
          {t("page.card.header.description")}
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <OAuthButtons
          loading={loading}
          onClick={handleOAuthClick}
          providers={OAUTH_PROVIDERS.map((provider) => ({
            ...provider,
            label: t(`page.card.content.oauth.${provider.provider}.label`),
          }))}
        />
        <SeparatorWithText>
          {t("page.card.content.separator")}
        </SeparatorWithText>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("page.card.content.form.name.label")}
                  </FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    autoComplete="name"
                    disabled={loading.status}
                    id={field.name}
                    placeholder={t("page.card.content.form.name.placeholder")}
                    type="text"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("page.card.content.form.email.label")}
                  </FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    autoComplete="username"
                    disabled={loading.status}
                    id={field.name}
                    placeholder={t("page.card.content.form.email.placeholder")}
                    type="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
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
                    disabled={loading.status}
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
          <ButtonLoading
            type="submit"
            loading={loading.status && loading.provider === "credentials"}
          >
            {t("page.card.content.form.submitButton.label")}
          </ButtonLoading>
        </form>
      </AuthCardContent>
      <AuthCardFooter>
        <Link className="text-muted-foreground" href="/signin" prefetch={false}>
          {t("page.card.footer.signupLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { SignUpContainer };

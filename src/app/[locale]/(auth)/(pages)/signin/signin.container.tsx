"use client";
// Vendors
import { Controller } from "react-hook-form";
// Components
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/auth-card/auth-card.component";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldError, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { OAuthButtons } from "@/components/oauth-buttons/oauth-buttons.component";
import { PasswordInput } from "@/components/password-input/password-input.component";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
// Constants
import { OAUTH_PROVIDERS } from "./constants/signin.constants";
// Hooks
import { useSignIn } from "./hooks/use-signin.hook";
// Icons
import { CircleCheck } from "lucide-react";
// Types
import type { SignInContainerProps } from "./types/signin.container.types";

const SignInContainer = ({ reset }: SignInContainerProps) => {
  const {
    form,
    handleOAuthClick,
    handlePasskeyClick,
    handleSubmit,
    loading,
    t,
  } = useSignIn();

  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>{t("page.card.header.title")}</AuthCardTitle>
        <AuthCardDescription>
          {t("page.card.header.description")}
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        {reset === "success" && (
          <Alert className="border-none bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
            <CircleCheck />
            <AlertTitle>
              {t("page.card.content.resetSuccessAlert.title")}
            </AlertTitle>
          </Alert>
        )}
        <ButtonLoading
          loading={loading.status && loading.provider === "passkey"}
          onClick={handlePasskeyClick}
          type="button"
          variant="outline"
        >
          {t("page.card.content.passkeyButton.label")}
        </ButtonLoading>
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
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldSet disabled={loading.status}>
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
                    autoComplete="username webauthn"
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
                    autoComplete="current-password webauthn"
                    id={field.name}
                    placeholder={t(
                      "page.card.content.form.password.placeholder",
                    )}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Controller
                control={form.control}
                name="rememberMe"
                render={({ field, fieldState }) => (
                  <Field
                    className="w-auto"
                    data-invalid={fieldState.invalid}
                    orientation="horizontal"
                  >
                    <FieldLabel htmlFor={field.name}>
                      <Checkbox
                        aria-invalid={fieldState.invalid}
                        aria-label={t(
                          "page.card.content.form.rememberMe.label",
                        )}
                        checked={field.value}
                        id={field.name}
                        onCheckedChange={field.onChange}
                      />
                      {t("page.card.content.form.rememberMe.label")}
                    </FieldLabel>
                  </Field>
                )}
              />
              <Link
                disabled={loading.status}
                href="/forgot-password"
                prefetch={false}
              >
                {t("page.card.content.form.forgotLink.label")}
              </Link>
            </div>
            <ButtonLoading
              type="submit"
              loading={loading.status && loading.provider === "credentials"}
            >
              {t("page.card.content.form.submitButton.label")}
            </ButtonLoading>
          </FieldSet>
        </form>
      </AuthCardContent>
      <AuthCardFooter>
        <Link
          className="text-muted-foreground"
          disabled={loading.status}
          href="/signup"
          prefetch={false}
        >
          {t("page.card.footer.registerLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { SignInContainer };

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
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { OAuthButtons } from "@/components/oauth-buttons/oauth-buttons.component";
import { PasswordInput } from "@/components/password-input/password-input.component";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
// Constants
import { OAUTH_PROVIDERS } from "./constants/signin.constants";
// Hooks
import { SignInHook } from "./hooks/signin.hook";
// i18n
import { Link } from "@/i18n/navigation";
// Icons
import { CircleCheck } from "lucide-react";
// Types
import type { SignInContainerProps } from "./types/signin.container.types";

const SignInContainer = ({ reset }: SignInContainerProps) => {
  const { form, handleOAuthClick, handleSubmit, loading, t } = SignInHook();

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
                    autoComplete="current-password"
                    disabled={loading.status}
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
            <div className="flex flex-wrap justify-between gap-2">
              <Controller
                control={form.control}
                name="rememberMe"
                render={({ field, fieldState }) => (
                  <Field
                    className="w-auto"
                    data-invalid={fieldState.invalid}
                    orientation="horizontal"
                  >
                    <Checkbox
                      aria-invalid={fieldState.invalid}
                      checked={field.value}
                      disabled={loading.status}
                      id={field.name}
                      onCheckedChange={field.onChange}
                    />
                    <FieldLabel htmlFor={field.name}>
                      {t("page.card.content.form.rememberMe.label")}
                    </FieldLabel>
                  </Field>
                )}
              />
              <Link className="h-8" href="/forgot-password" prefetch={false}>
                {t("page.card.content.form.forgotLink.label")}
              </Link>
            </div>
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
        <Link className="text-muted-foreground" href="/signup" prefetch={false}>
          {t("page.card.footer.registerLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { SignInContainer };

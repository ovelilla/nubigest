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
// Hooks
import { ForgotPasswordHook } from "./hooks/forgot-password.hook";
// i18n
import { Link } from "@/i18n/navigation";

const ForgotPasswordContainer = () => {
  const { form, handleSubmit, loading, t } = ForgotPasswordHook();

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
                    disabled={loading}
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

export { ForgotPasswordContainer };

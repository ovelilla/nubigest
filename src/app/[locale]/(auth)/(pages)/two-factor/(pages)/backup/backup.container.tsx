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
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldError, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
// Hooks
import { BackupHook } from "./hooks/backup.hook";

const BackupContainer = () => {
  const { form, handleSubmit, loading, t } = BackupHook();

  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>{t("page.card.header.title")}</AuthCardTitle>
        <AuthCardDescription>
          {t("page.card.header.description")}
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldSet disabled={loading}>
            <Controller
              control={form.control}
              name="code"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("page.card.content.form.code.label")}
                  </FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id={field.name}
                    placeholder={t("page.card.content.form.code.placeholder")}
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
              name="trustDevice"
              render={({ field, fieldState }) => (
                <Field
                  className="w-auto"
                  data-invalid={fieldState.invalid}
                  orientation="horizontal"
                >
                  <FieldLabel htmlFor={field.name}>
                    <Checkbox
                      aria-invalid={fieldState.invalid}
                      aria-label={t("page.card.content.form.trustDevice.label")}
                      checked={field.value}
                      id={field.name}
                      onCheckedChange={field.onChange}
                    />
                    {t("page.card.content.form.trustDevice.label")}
                  </FieldLabel>
                </Field>
              )}
            />
            <ButtonLoading loading={loading} type="submit">
              {t("page.card.content.form.submitButton.label")}
            </ButtonLoading>
          </FieldSet>
        </form>
      </AuthCardContent>
      <AuthCardFooter>
        <Link
          className="text-muted-foreground"
          disabled={loading}
          href="/two-factor"
          prefetch={false}
        >
          {t("page.card.footer.twoFactorLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { BackupContainer };

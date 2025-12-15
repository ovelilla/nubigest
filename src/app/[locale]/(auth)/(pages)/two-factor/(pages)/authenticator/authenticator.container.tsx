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
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// Hooks
import { AuthenticatorHook } from "./hooks/authenticator.hook";
// i18n
import { Link } from "@/i18n/navigation";

const AuthenticatorContainer = () => {
  const { form, handleSubmit, loading, t } = AuthenticatorHook();

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
              name="code"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("page.card.content.form.code.label")}
                  </FieldLabel>
                  <InputOTP
                    {...field}
                    disabled={loading}
                    id={field.name}
                    maxLength={6}
                    type="text"
                  >
                    <InputOTPGroup className="w-full">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          className="grow"
                          index={index}
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
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
                  <Checkbox
                    aria-invalid={fieldState.invalid}
                    checked={field.value}
                    disabled={loading}
                    id={field.name}
                    onCheckedChange={field.onChange}
                  />
                  <FieldLabel htmlFor={field.name}>
                    {t("page.card.content.form.trustDevice.label")}
                  </FieldLabel>
                </Field>
              )}
            />
          </div>
          <ButtonLoading disabled={loading} loading={loading} type="submit">
            {t("page.card.content.form.submitButton.label")}
          </ButtonLoading>
        </form>
      </AuthCardContent>
      <AuthCardFooter>
        <Link
          className="text-muted-foreground"
          href="/two-factor"
          prefetch={false}
        >
          {t("page.card.footer.twoFactorLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { AuthenticatorContainer };

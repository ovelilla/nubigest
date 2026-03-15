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
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldError, FieldSet } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link } from "@/components/ui/link";
// Hooks
import { EmailHook } from "./hooks/email.hook";

const EmailContainer = () => {
  const {
    cooldown,
    handleResend,
    handleSubmit,
    isInitializing,
    loadingEmail,
    loadingVerify,
    form,
    t,
  } = EmailHook();

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
          <FieldSet disabled={isInitializing || loadingVerify || loadingEmail}>
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
                    autoComplete="one-time-code"
                    aria-invalid={fieldState.invalid}
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
            <ButtonLoading loading={loadingVerify} type="submit">
              {t("page.card.content.form.submitButton.label")}
            </ButtonLoading>
          </FieldSet>
        </form>

        <p className="text-muted-foreground text-sm">
          {cooldown > 0
            ? t.rich("page.card.footer.resend.cooldown", {
                seconds: () => <span className="tabular-nums">{cooldown}</span>,
              })
            : t.rich("page.card.footer.resend.ready", {
                button: (chunks) => (
                  <Button
                    className="px-0"
                    disabled={
                      isInitializing ||
                      loadingVerify ||
                      loadingEmail ||
                      cooldown > 0
                    }
                    onClick={handleResend}
                    variant="link"
                  >
                    {chunks}
                  </Button>
                ),
              })}
        </p>
      </AuthCardContent>
      <AuthCardFooter>
        <Link
          className="text-muted-foreground"
          disabled={isInitializing || loadingVerify || loadingEmail}
          href="/two-factor"
          prefetch={false}
        >
          {t("page.card.footer.twoFactorLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { EmailContainer };

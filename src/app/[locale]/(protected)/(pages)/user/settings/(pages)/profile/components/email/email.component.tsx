"use client";
// Vendors
import { Controller } from "react-hook-form";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EmailSkeleton } from "./components/email-skeleton/email-skeleton.component";
// Hooks
import { useEmail } from "./hook/use-email.hook";

const Email = () => {
  const { form, handleSubmit, isSessionPending, t } = useEmail();

  if (isSessionPending) {
    return <EmailSkeleton />;
  }

  return (
    <Card className="pb-0">
      <CardHeader>
        <CardTitle>
          <h2>{t("ui.card.header.title")}</h2>
        </CardTitle>
        <CardDescription>{t("ui.card.header.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="email-form" onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldSet disabled={form.formState.isSubmitting}>
            <FieldGroup>
              <Controller
                control={form.control}
                name="newEmail"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      aria-label={t(
                        "ui.card.content.form.fields.newEmail.label",
                      )}
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      className="max-w-96"
                      id={field.name}
                      placeholder={t(
                        "ui.card.content.form.fields.newEmail.placeholder",
                      )}
                      spellCheck={false}
                      type="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter className="justify-end border-t px-6 pb-4 [.border-t]:pt-4">
        <ButtonLoading
          disabled={!form.formState.isDirty}
          form="email-form"
          loading={form.formState.isSubmitting}
          type="submit"
        >
          {t("ui.card.content.form.submitButton.label")}
        </ButtonLoading>
      </CardFooter>
    </Card>
  );
};

export { Email };

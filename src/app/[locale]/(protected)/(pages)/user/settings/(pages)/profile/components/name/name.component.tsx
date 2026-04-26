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
import { NameSkeleton } from "./components/name-skeleton/name-skeleton.component";
// Hooks
import { useName } from "./hook/use-name.hook";

const Name = () => {
  const { form, handleSubmit, isSessionPending, t } = useName();

  if (isSessionPending) {
    return <NameSkeleton />;
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
        <form id="name-form" onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldSet disabled={form.formState.isSubmitting}>
            <FieldGroup>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      aria-label={t("ui.card.content.form.fields.name.label")}
                      autoComplete="name"
                      className="max-w-96"
                      id={field.name}
                      placeholder={t(
                        "ui.card.content.form.fields.name.placeholder",
                      )}
                      type="text"
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
          form="name-form"
          loading={form.formState.isSubmitting}
          type="submit"
        >
          {t("ui.card.content.form.submitButton.label")}
        </ButtonLoading>
      </CardFooter>
    </Card>
  );
};

export { Name };

"use client";
// Vendors
import { Controller } from "react-hook-form";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import { Field, FieldLabel, FieldError, FieldSet } from "@/components/ui/field";
import { PasswordInput } from "@/components/password-input/password-input.component";
import {
  Step,
  StepCancelButton,
  StepContent,
  StepDescription,
  StepFooter,
  StepHeader,
  StepTitle,
} from "@/components/step/step.component";
// Hooks
import { PasswordHook } from "./hooks/password.hook";
// Types
import type { PasswordProps } from "./types/password.component.types";

const Password = ({ description, onCancel, onNext, title }: PasswordProps) => {
  const { form, handleSubmit, t } = PasswordHook({ onNext });

  return (
    <Step>
      {(title || description) && (
        <StepHeader>
          {title && <StepTitle>{title}</StepTitle>}
          {description && <StepDescription>{description}</StepDescription>}
        </StepHeader>
      )}
      <StepContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldSet disabled={form.formState.isSubmitting}>
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("ui.form.password.label")}
                  </FieldLabel>
                  <PasswordInput
                    {...field}
                    aria-invalid={fieldState.invalid}
                    autoComplete="current-password"
                    id={field.name}
                    placeholder={t("ui.form.password.placeholder")}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <StepFooter>
              {onCancel && (
                <StepCancelButton onClick={onCancel}>
                  {t("ui.form.actions.cancelButton.label")}
                </StepCancelButton>
              )}
              <ButtonLoading
                loading={form.formState.isSubmitting}
                type="submit"
              >
                {t("ui.form.actions.nextButton.label")}
              </ButtonLoading>
            </StepFooter>
          </FieldSet>
        </form>
      </StepContent>
    </Step>
  );
};

export { Password };

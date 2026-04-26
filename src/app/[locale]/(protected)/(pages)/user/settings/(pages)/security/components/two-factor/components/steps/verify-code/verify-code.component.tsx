// Vendors
import { Controller } from "react-hook-form";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import { Field, FieldLabel, FieldError, FieldSet } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Step,
  StepContent,
  StepDescription,
  StepFooter,
  StepHeader,
  StepPrevButton,
  StepTitle,
} from "@/components/step/step.component";
// Hooks
import { useVerifyCode } from "./hooks/use-verify-code.hook";
// Types
import type { VerifyCodeProps } from "./types/verify-code.component.types";

const VerifyCode = ({
  description,
  onNext,
  onPrev,
  title,
}: VerifyCodeProps) => {
  const { form, handleSubmit, t } = useVerifyCode({ onNext });
  return (
    <Step>
      {(description || title) && (
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
              name="code"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    {t("ui.form.code.label")}
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
            <StepFooter>
              {onPrev && (
                <StepPrevButton type="button" onClick={onPrev}>
                  {t("ui.form.actions.prevButton.label")}
                </StepPrevButton>
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

export { VerifyCode };

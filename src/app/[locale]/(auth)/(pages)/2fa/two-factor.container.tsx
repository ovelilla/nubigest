"use client";
// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// Hooks
import { TwoFactorHook } from "./hooks/two-factor.hook";

const TwoFactorContainer = () => {
  const { form, handleSubmit, loading, t } = TwoFactorHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("page.card.header.title")}</CardTitle>
        <CardDescription>{t("page.card.header.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>
                      {t("page.form.otp.label")}
                    </FormLabel>
                    <FormControl>
                      <InputOTP
                        {...field}
                        disabled={loading}
                        id={field.name}
                        maxLength={6}
                        type="text"
                      >
                        <InputOTPGroup>
                          {Array.from({ length: 6 }).map((_, index) => (
                            <InputOTPSlot key={index} index={index} />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ButtonLoading type="submit" loading={loading}>
              {t("page.form.submitButton.label")}
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export { TwoFactorContainer };

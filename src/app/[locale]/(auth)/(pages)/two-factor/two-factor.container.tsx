"use client";
// Components
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Hooks
import { TwoFactorHook } from "./hooks/two-factor.hook";

const TwoFactorContainer = () => {
  const {
    cooldown,
    form,
    handleResend,
    handleSubmit,
    loadingEmail,
    loadingVerify,
    t,
  } = TwoFactorHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("page.card.header.title")}</CardTitle>
        <CardDescription>{t("page.card.header.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="totp" className="w-full gap-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="totp">Authenticator</TabsTrigger>
            <TabsTrigger value="otp">Email OTP</TabsTrigger>
          </TabsList>
          <TabsContent className="pt-4" value="totp"></TabsContent>
          <TabsContent className="flex flex-col gap-4" value="otp">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor={field.name}>
                          {t("page.card.content.form.code.label")}
                        </FormLabel>
                        <FormControl>
                          <InputOTP
                            {...field}
                            disabled={loadingVerify || loadingEmail}
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
                  <FormField
                    control={form.control}
                    name="trustDevice"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            disabled={loadingVerify || loadingEmail}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="mt-0">
                          {t("page.card.content.form.trustDevice.label")}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                <ButtonLoading
                  disabled={loadingEmail}
                  loading={loadingVerify}
                  type="submit"
                >
                  {t("page.card.content.form.submitButton.label")}
                </ButtonLoading>
              </form>
            </Form>

            <p className="text-muted-foreground text-sm">
              {cooldown > 0
                ? t.rich("page.card.footer.resend.cooldown", {
                    seconds: () => (
                      <span className="tabular-nums">{cooldown}</span>
                    ),
                  })
                : t.rich("page.card.footer.resend.ready", {
                    button: (chunks) => (
                      <Button
                        className="px-0"
                        disabled={loadingVerify || cooldown > 0}
                        onClick={handleResend}
                        variant="link"
                      >
                        {chunks}
                      </Button>
                    ),
                  })}
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <ButtonLink
          className="text-muted-foreground"
          linkProps={{ href: "/signin", prefetch: false }}
        >
          {t("page.card.footer.signInLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { TwoFactorContainer };

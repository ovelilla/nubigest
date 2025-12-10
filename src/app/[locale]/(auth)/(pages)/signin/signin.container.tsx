"use client";
// Components
import { Alert, AlertTitle } from "@/components/ui/alert";
import { ButtonLink } from "@/components/ui/button-link";
import { ButtonLoading } from "@/components/ui/button-loading";
import { ButtonTogglePassword } from "@/components/ui/button-toggle-password";
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
import { Input } from "@/components/ui/input";
import { OAuthButtons } from "@/components/oauth-buttons/oauth-buttons.component";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
// Constants
import { OAUTH_PROVIDERS } from "./constants/signin.constants";
// Hooks
import { SignInHook } from "./hooks/signin.hook";
// Icons
import { CircleCheck } from "lucide-react";
// Types
import type { SignInContainerProps } from "./types/signin.container.types";

const SignInContainer = ({ reset }: SignInContainerProps) => {
  const {
    form,
    handleOAuthClick,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    t,
  } = SignInHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("page.card.header.title")}</CardTitle>
        <CardDescription>{t("page.card.header.description")}</CardDescription>
      </CardHeader>

      <CardContent>
        {reset === "success" && (
          <Alert className="border-none bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
            <CircleCheck />
            <AlertTitle>
              {t("page.card.content.resetSuccessAlert.title")}
            </AlertTitle>
          </Alert>
        )}
        <OAuthButtons
          loading={loading}
          onClick={handleOAuthClick}
          providers={OAUTH_PROVIDERS.map((provider) => ({
            ...provider,
            label: t(`page.card.content.oauth.${provider.provider}.label`),
          }))}
        />
        <SeparatorWithText>
          {t("page.card.content.separator")}
        </SeparatorWithText>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>
                      {t("page.card.content.form.email.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        autoComplete="username"
                        disabled={loading.status}
                        id={field.name}
                        placeholder={t(
                          "page.card.content.form.email.placeholder",
                        )}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">
                      {t("page.card.content.form.password.label")}
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          autoComplete="current-password"
                          className="pr-12"
                          disabled={loading.status}
                          id={field.name}
                          placeholder={t(
                            "page.card.content.form.password.placeholder",
                          )}
                          type={showPassword ? "text" : "password"}
                        />
                      </FormControl>
                      <ButtonTogglePassword
                        aria-label={
                          showPassword
                            ? t("page.card.content.form.password.toggle.hide")
                            : t("page.card.content.form.password.toggle.show")
                        }
                        disabled={loading.status}
                        onClick={handleToggleShowPassword}
                        showPassword={showPassword}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap justify-between gap-2">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={loading.status}
                        />
                      </FormControl>
                      <FormLabel>
                        {t("page.card.content.form.rememberMe.label")}
                      </FormLabel>
                    </FormItem>
                  )}
                />
                <ButtonLink
                  className="h-8"
                  linkProps={{ href: "/forgot-password", prefetch: false }}
                >
                  {t("page.card.content.form.forgotLink.label")}
                </ButtonLink>
              </div>
            </div>
            <ButtonLoading
              type="submit"
              loading={loading.status && loading.provider === "credentials"}
            >
              {t("page.card.content.form.submitButton.label")}
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <ButtonLink
          className="text-muted-foreground"
          linkProps={{ href: "/signup", prefetch: false }}
        >
          {t("page.card.footer.registerLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { SignInContainer };

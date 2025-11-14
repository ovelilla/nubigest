"use client";
// Components
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

const SignInContainer = () => {
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
        <OAuthButtons
          loading={loading}
          onClick={handleOAuthClick}
          providers={OAUTH_PROVIDERS.map((provider) => ({
            ...provider,
            label: t(`page.oauth.${provider.provider}.label`),
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
                      {t("page.form.email.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        autoComplete="username"
                        disabled={loading.status}
                        id={field.name}
                        placeholder={t("page.form.email.placeholder")}
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
                      {t("page.form.password.label")}
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          autoComplete="current-password"
                          className="pr-12"
                          disabled={loading.status}
                          id="password"
                          placeholder={t("page.form.password.placeholder")}
                          type={showPassword ? "text" : "password"}
                        />
                      </FormControl>
                      <ButtonTogglePassword
                        aria-label={
                          showPassword
                            ? t("page.form.password.toggle.hide")
                            : t("page.form.password.toggle.show")
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
              <ButtonLink
                className="h-8 self-start"
                linkProps={{ href: "/forgot-password" }}
              >
                {t("page.form.forgotLink.label")}
              </ButtonLink>
            </div>
            <ButtonLoading
              type="submit"
              loading={loading.status && loading.provider === "credentials"}
            >
              {t("page.form.submitButton.label")}
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <ButtonLink linkProps={{ href: "/signup", prefetch: false }}>
          {t("page.card.footer.registerLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { SignInContainer };

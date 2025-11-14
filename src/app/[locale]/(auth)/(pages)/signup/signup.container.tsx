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
import {
  PasswordStrength,
  PasswordStrengthBar,
  PasswordStrengthRules,
  PasswordStrengthRule,
} from "@/components/password-strength";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
// Constants
import { OAUTH_PROVIDERS } from "./constants/signup.constants";
// Hooks
import { SignUpHook } from "./hooks/signup.hook";

const SignUpContainer = () => {
  const {
    form,
    handleOAuthClick,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    t,
  } = SignUpHook();

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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>
                      {t("page.form.name.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading.status}
                        id={field.name}
                        placeholder={t("page.form.name.placeholder")}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>
                        {t("page.form.password.label")}
                      </FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="new-password"
                            className="pr-12"
                            disabled={loading.status}
                            id={field.name}
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
                      {field.value && (
                        <PasswordStrength value={field.value}>
                          <PasswordStrengthBar />
                          <PasswordStrengthRules>
                            <PasswordStrengthRule rule="length">
                              {t("page.form.password.rules.length")}
                            </PasswordStrengthRule>
                            <PasswordStrengthRule rule="number">
                              {t("page.form.password.rules.number")}
                            </PasswordStrengthRule>
                            <PasswordStrengthRule rule="uppercase">
                              {t("page.form.password.rules.uppercase")}
                            </PasswordStrengthRule>
                            <PasswordStrengthRule rule="special">
                              {t("page.form.password.rules.special")}
                            </PasswordStrengthRule>
                          </PasswordStrengthRules>
                        </PasswordStrength>
                      )}
                    </FormItem>
                  );
                }}
              />
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
        <ButtonLink linkProps={{ href: "/signin", prefetch: false }}>
          {t("page.card.footer.signupLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { SignUpContainer };

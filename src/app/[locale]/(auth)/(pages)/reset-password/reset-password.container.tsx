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
import {
  PasswordStrength,
  PasswordStrengthBar,
  PasswordStrengthRules,
  PasswordStrengthRule,
} from "@/components/password-strength";
// Hooks
import { ResetPasswordHook } from "./hooks/reset-password.hook";

const ResetPasswordContainer = () => {
  const {
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    t,
  } = ResetPasswordHook();

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
                            disabled={loading}
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
                          disabled={loading}
                          onClick={handleToggleShowPassword}
                          showPassword={showPassword}
                        />
                      </div>
                      <FormMessage />
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
                    </FormItem>
                  );
                }}
              />
            </div>
            <ButtonLoading type="submit" loading={loading}>
              {t("page.form.submitButton.label")}
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin" }}>
          {t("page.card.footer.signinLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { ResetPasswordContainer };

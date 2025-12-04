"use client";
// Components
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Hooks
import { ForgotPasswordHook } from "./hooks/forgot-password.hook";

const ForgotPasswordContainer = () => {
  const { form, handleSubmit, loading, t } = ForgotPasswordHook();

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
                        disabled={loading}
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
            </div>
            <ButtonLoading type="submit" loading={loading}>
              {t("page.card.content.form.submitButton.label")}
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <ButtonLink
          className="text-muted-foreground"
          linkProps={{ href: "/signin" }}
        >
          {t("page.card.footer.signinLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { ForgotPasswordContainer };

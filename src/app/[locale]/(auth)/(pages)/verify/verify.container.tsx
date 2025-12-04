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
// Hooks
import { VerifyHook } from "./hooks/verify.hook";

const VerifyContainer = () => {
  const { cooldown, email, handleResend, loading, t } = VerifyHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("page.card.header.title")}</CardTitle>
        <CardDescription>
          {t.rich("page.card.header.description", {
            email: email ?? "",
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ButtonLoading
          loading={loading}
          disabled={cooldown > 0 || loading}
          onClick={handleResend}
        >
          {cooldown > 0
            ? t.rich("page.card.content.resendButton.label.cooldown", {
                seconds: () => <span className="tabular-nums">{cooldown}</span>,
              })
            : t("page.card.content.resendButton.label.ready")}
        </ButtonLoading>
      </CardContent>
      <CardFooter>
        <ButtonLink
          className="text-muted-foreground"
          linkProps={{ href: "/signin", prefetch: false }}
        >
          {t("page.card.footer.changeEmail.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { VerifyContainer };

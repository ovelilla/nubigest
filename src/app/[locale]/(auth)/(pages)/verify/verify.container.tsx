"use client";
// Components
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/auth-card/auth-card.component";
import { ButtonLoading } from "@/components/ui/button-loading";
// Hooks
import { VerifyHook } from "./hooks/verify.hook";
// i18n
import { Link } from "@/i18n/navigation";
// Types
import { VerifyContainerProps } from "./types/verify.container.types";

const VerifyContainer = ({ email }: VerifyContainerProps) => {
  const { cooldown, handleResend, loading, t } = VerifyHook({ email });

  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>{t("page.card.header.title")}</AuthCardTitle>
        <AuthCardDescription>
          {t.rich("page.card.header.description", {
            email: email ?? "",
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
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
      </AuthCardContent>
      <AuthCardFooter>
        <Link className="text-muted-foreground" href="/signin" prefetch={false}>
          {t("page.card.footer.changeEmail.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { VerifyContainer };

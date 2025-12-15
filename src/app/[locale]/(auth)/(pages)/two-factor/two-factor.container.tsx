"use client";
// Vendors
import { useTranslations } from "next-intl";
// Components
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/auth-card/auth-card.component";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
// i18n
import { Link } from "@/i18n/navigation";
// Icons
import { KeyRound, Mail, Shield } from "lucide-react";

const TwoFactorContainer = () => {
  const t = useTranslations("twoFactor");

  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardTitle>{t("page.card.header.title")}</AuthCardTitle>
        <AuthCardDescription>
          {t("page.card.header.description")}
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <div className="flex flex-col gap-4">
          <Item
            render={
              <Link href="/two-factor/authenticator" prefetch={false}>
                <ItemMedia>
                  <Shield className="size-6" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {t("page.card.content.item.totp.title")}
                  </ItemTitle>
                  <ItemDescription>
                    {t("page.card.content.item.totp.description")}
                  </ItemDescription>
                </ItemContent>
              </Link>
            }
            variant="outline"
          />
          <Item
            render={
              <Link href="/two-factor/email" prefetch={false}>
                <ItemMedia>
                  <Mail className="size-6" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{t("page.card.content.item.otp.title")}</ItemTitle>
                  <ItemDescription>
                    {t("page.card.content.item.otp.description")}
                  </ItemDescription>
                </ItemContent>
              </Link>
            }
            variant="outline"
          ></Item>
          <Item
            render={
              <Link href="/two-factor/backup" prefetch={false}>
                <ItemMedia>
                  <KeyRound className="size-6" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {t("page.card.content.item.backup.title")}
                  </ItemTitle>
                  <ItemDescription>
                    {t("page.card.content.item.backup.description")}
                  </ItemDescription>
                </ItemContent>
              </Link>
            }
            variant="outline"
          ></Item>
        </div>
      </AuthCardContent>
      <AuthCardFooter>
        <Link className="text-muted-foreground" href="/signin" prefetch={false}>
          {t("page.card.footer.signInLink.label")}
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
};

export { TwoFactorContainer };

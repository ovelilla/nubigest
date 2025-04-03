// Vendors
import { getTranslations } from "next-intl/server";
// Components
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Types
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "authError.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const AuthErrorPage = async () => {
  const t = await getTranslations("authError.page");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("card.header.title")}</CardTitle>
        <CardDescription>{t("card.header.description")}</CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin" }}>
          {t("card.footer.registerLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default AuthErrorPage;

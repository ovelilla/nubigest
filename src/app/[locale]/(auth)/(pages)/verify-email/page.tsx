// Vendors
import { getTranslations } from "next-intl/server";
// Actions
import { verifyEmailAction } from "./actions/verify-email.action";
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
    namespace: "verifyEmail.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const VerifyEmailPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) => {
  const t = await getTranslations("verifyEmail.page");
  const token = (await searchParams).token;
  const result = await verifyEmailAction({ token });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {result.status === "success"
            ? t("card.header.title.success")
            : t("card.header.title.error")}
        </CardTitle>
        <CardDescription>{result.message}</CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin", prefetch: false }}>
          {t("card.footer.signinLink.label")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default VerifyEmailPage;

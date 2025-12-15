// Vendors
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
// Containers
import { EmailContainer } from "./email.container";
// i18n
import { redirect } from "@/i18n/navigation";
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
    namespace: "email.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const EmailPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  const cookieStore = await cookies();
  const twoFactorCookie = cookieStore.get("better-auth.two_factor");

  if (!twoFactorCookie) {
    redirect({ href: "/signin", locale });
  }

  return <EmailContainer />;
};

export default EmailPage;

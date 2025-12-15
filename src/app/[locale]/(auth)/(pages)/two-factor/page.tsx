// Vendors
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
// Containers
import { TwoFactorContainer } from "./two-factor.container";
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
    namespace: "twoFactor.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const TwoFactorPage = async ({
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
  return <TwoFactorContainer />;
};

export default TwoFactorPage;

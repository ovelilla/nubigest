// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { TwoFactorContainer } from "./two-factor.container";
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

const TwoFactorPage = async () => {
  return <TwoFactorContainer />;
};

export default TwoFactorPage;

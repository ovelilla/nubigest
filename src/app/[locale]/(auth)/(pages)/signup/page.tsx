// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { SignUpContainer } from "./signup.container";
// Types
import type { Metadata } from "next";
import type { Locale } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "signup.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const SignUpPage = () => {
  return <SignUpContainer />;
};

export default SignUpPage;

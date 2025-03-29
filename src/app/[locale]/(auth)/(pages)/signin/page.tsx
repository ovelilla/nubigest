// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { SignInContainer } from "./signin.container";
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
    namespace: "signin.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const SignInPage = async () => {
  return <SignInContainer />;
};

export default SignInPage;

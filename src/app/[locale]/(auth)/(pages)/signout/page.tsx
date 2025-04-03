// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { SignOutContainer } from "./signout.container";
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
    namespace: "signout.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const SignOutPage = async () => {
  return <SignOutContainer />;
};

export default SignOutPage;

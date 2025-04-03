// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { ForgotPasswordContainer } from "./forgot-password.container";
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
    namespace: "forgotPassword.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const ForgotPasswordPage = (): React.ReactElement => {
  return <ForgotPasswordContainer />;
};

export default ForgotPasswordPage;

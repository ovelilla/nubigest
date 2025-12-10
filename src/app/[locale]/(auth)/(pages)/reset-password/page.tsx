// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { ResetPasswordContainer } from "./reset-password.container";
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
    namespace: "resetPassword.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { error, token } = await searchParams;
  return <ResetPasswordContainer error={error} token={token} />;
};

export default ResetPasswordPage;

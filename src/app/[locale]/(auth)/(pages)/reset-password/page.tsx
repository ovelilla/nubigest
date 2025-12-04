// Vendors
import { Suspense } from "react";
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

const ResetPasswordPage = () => {
  return (
    <Suspense>
      <ResetPasswordContainer />
    </Suspense>
  );
};

export default ResetPasswordPage;

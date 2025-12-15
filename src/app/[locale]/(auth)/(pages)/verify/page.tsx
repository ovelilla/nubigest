// Vendors
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
// Containers
import { VerifyContainer } from "./verify.container";
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
    namespace: "verify.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const VerifyPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  const cookieStore = await cookies();
  const pendingVerificationCookie = cookieStore.get(
    "better-auth.pending_verification",
  );

  if (!pendingVerificationCookie) {
    redirect({ href: "/signin", locale });
  }

  const email = decodeURIComponent(pendingVerificationCookie?.value ?? "");

  return <VerifyContainer email={email} />;
};

export default VerifyPage;

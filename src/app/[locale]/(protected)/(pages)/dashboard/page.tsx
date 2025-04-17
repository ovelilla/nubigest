// Vendors
import { notFound } from "next/navigation";
// Actions
import { getOrganizationSlugAction } from "./actions/dashboard.actions";
// i18n
import { redirect } from "@/i18n/navigation";
// Libs
import { getSession } from "@/lib/auth/utils/get-session";
// Types
import type { Metadata } from "next";
import type { DashboardPageProps } from "./types/page.types";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const { locale } = await params;

  const session = await getSession(locale);

  if (session.user.role === "ADMIN") {
    redirect({ href: "/dashboard/global", locale });
  }

  const slug = await getOrganizationSlugAction({
    userId: session.user.id,
  });

  if (!slug) {
    notFound();
  }

  redirect({
    href: {
      pathname: "/dashboard/[slug]",
      params: { slug },
    },
    locale,
  });
};

export default DashboardPage;

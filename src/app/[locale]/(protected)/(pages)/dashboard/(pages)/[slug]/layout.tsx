// Vendors
import { notFound } from "next/navigation";
// Actions
import { checkUserOrganizationAction } from "./actions/organization.actions";
// Libs
import { getSession } from "@/lib/auth/utils/get-session";
// Types
import type { OrganizationLayoutProps } from "./types/layout.types";

async function OrganizationLayout({
  children,
  params,
}: OrganizationLayoutProps) {
  const { locale, slug } = await params;

  const session = await getSession(locale);

  const hasAccess = await checkUserOrganizationAction({
    userId: session.user.id,
    slug,
  });

  if (!hasAccess) {
    notFound();
  }

  return children;
}

export default OrganizationLayout;

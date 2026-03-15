// Vendors
import { headers } from "next/headers";
// i18n
import { redirect } from "@/i18n/navigation";
// Libs
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
// Types
import type { OrgPageProps } from "./types/page.types";
// Utils
import { getSession } from "@/utils/auth/get-session/get-session.util";

const OrgPage = async ({ params }: OrgPageProps) => {
  const { locale } = await params;

  const { session } = await getSession(locale);

  if (!session.activeOrganizationId) {
    redirect({ href: "/signin", locale });
    return;
  }

  const organization = await prisma.organization.findUnique({
    where: {
      id: session.activeOrganizationId,
    },
  });

  if (!organization) {
    await auth.api.signOut({
      headers: await headers(),
    });

    redirect({ href: "/signin", locale });
    return;
  }

  redirect({
    href: {
      pathname: "/org/[orgSlug]/dashboard",
      params: {
        orgSlug: organization.slug,
      },
    },
    locale,
  });
};

export default OrgPage;

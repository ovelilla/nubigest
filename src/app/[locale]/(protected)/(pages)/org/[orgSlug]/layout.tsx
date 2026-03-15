// Vendors
import { notFound } from "next/navigation";
// Layouts
import { OrgLayout } from "./layouts/org/org.layout";
// Libs
import { prisma } from "@/lib/prisma";
// Styles
// import "./layout.css";
// Types
import { OrgSlugLayoutProps } from "./types/layout.types";
// Utils
import { getSession } from "@/utils/auth/get-session/get-session.util";

const OrgSlugLayout = async ({ children, params }: OrgSlugLayoutProps) => {
  const { locale, orgSlug } = await params;

  const session = await getSession(locale);

  const organization = await prisma.organization.findUnique({
    where: {
      slug: orgSlug,
    },
  });

  if (!organization) {
    notFound();
  }

  const isMember = await prisma.member.findFirst({
    where: {
      organizationId: organization.id,
      userId: session.session.userId,
    },
  });

  if (!isMember) {
    notFound();
  }

  return <OrgLayout session={session}>{children}</OrgLayout>;
};

export default OrgSlugLayout;

// Components
import {
  ProtectedLayout,
  ProtectedLayoutContainer,
  ProtectedLayoutSidebar,
  ProtectedLayoutHeader,
  ProtectedLayoutMain,
} from "@/app/[locale]/(protected)/layouts/protected/protected.layout";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import { AdminLayoutProps } from "./types/layout.types";
// Utils
import { getSession } from "@/utils/auth/get-session/get-session.util";

const AdminLayout = async ({ children, params }: AdminLayoutProps) => {
  const { locale } = await params;

  const session = await getSession(locale);

  return (
    <ProtectedLayout>
      <ProtectedLayoutSidebar>sidebar content</ProtectedLayoutSidebar>
      <ProtectedLayoutContainer>
        <ProtectedLayoutHeader>header content</ProtectedLayoutHeader>
        <ProtectedLayoutMain>{children}</ProtectedLayoutMain>
      </ProtectedLayoutContainer>
    </ProtectedLayout>
  );
};

export default AdminLayout;

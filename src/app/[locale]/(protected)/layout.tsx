// Actions
import { getUserOrganizations } from "./actions/protected.actions";
// Layouts
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// Libs
import { getSession } from "@/lib/auth/utils/get-session";
// Styles
import "./layout.css";
// Types
import { ProtectedLayoutProps } from "./types/layout.types";

async function ProtectedLayout({ children, params }: ProtectedLayoutProps) {
  const { locale } = await params;

  const session = await getSession(locale);

  const organizations = await getUserOrganizations({ userId: session.user.id });

  return (
    <DashboardLayout organizations={organizations} session={session}>
      {children}
    </DashboardLayout>
  );
}

export default ProtectedLayout;

// Layouts
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// Libs
import { getSession } from "@/utils/auth/get-session/get-session.util";
// Styles
import "./layout.css";
// Types
import { ProtectedLayoutProps } from "./types/layout.types";

async function ProtectedLayout({ children, params }: ProtectedLayoutProps) {
  const { locale } = await params;

  const session = await getSession(locale);

  return <DashboardLayout session={session}>{children}</DashboardLayout>;
}

export default ProtectedLayout;

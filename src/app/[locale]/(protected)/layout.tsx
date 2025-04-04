// Vendors
import { auth } from "@/lib/auth";
// Layouts
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// Styles
import "./layout.css";

async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return <DashboardLayout session={session}>{children}</DashboardLayout>;
}

export default ProtectedLayout;

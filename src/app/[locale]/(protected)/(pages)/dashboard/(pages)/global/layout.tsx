// i18n
import { redirect } from "@/i18n/navigation";
// Libs
import { getSession } from "@/lib/auth/utils/get-session";
// Types
import type { GlobalLayoutProps } from "./types/layout.types";

async function GlobalLayout({ children, params }: GlobalLayoutProps) {
  const { locale } = await params;

  const session = await getSession(locale);

  if (session.user.role !== "ADMIN") {
    redirect({ href: "/dashboard", locale });
  }

  return children;
}

export default GlobalLayout;

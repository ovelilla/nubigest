// Layouts
import { UserLayout as UserLayoutComponent } from "./layouts/user/user.layout";
// Types
import { UserLayoutProps } from "./types/layout.types";
// Utils
import { getSession } from "@/utils/auth/get-session/get-session.util";

const UserLayout = async ({ children, params }: UserLayoutProps) => {
  const { locale } = await params;

  const session = await getSession(locale);

  return (
    <UserLayoutComponent session={session}>{children}</UserLayoutComponent>
  );
};

export default UserLayout;

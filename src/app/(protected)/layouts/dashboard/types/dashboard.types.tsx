// Types
import type { Session } from "next-auth";

type DashboardProps = {
  children: React.ReactNode;
  session: Session | null;
};

export type { DashboardProps };

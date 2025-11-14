// Auth
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

type DashboardProps = {
  children: React.ReactNode;
  session: Session;
};

export type { DashboardProps };

// Auth
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

type UserLayoutProps = {
  children: React.ReactNode;
  session: Session;
};

export type { UserLayoutProps };

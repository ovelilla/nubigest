// Auth
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

type OrgLayoutProps = {
  children: React.ReactNode;
  session: Session;
};

export type { OrgLayoutProps };

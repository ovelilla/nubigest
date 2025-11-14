// Auth
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

type UserNavProps = {
  session: Session;
};

export type { UserNavProps };

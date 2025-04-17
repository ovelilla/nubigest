// Types
import type { Session } from "next-auth";
import type { Organization } from "@/app/[locale]/(protected)/types/protected.types";

type DashboardProps = {
  children: React.ReactNode;
  organizations: Array<Organization>;
  session: Session;
};

export type { DashboardProps };

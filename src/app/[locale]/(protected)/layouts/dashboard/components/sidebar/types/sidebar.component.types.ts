// Types
import type { Session } from "next-auth";
import type { Organization } from "@/app/[locale]/(protected)/types/protected.types";

type SidebarProps = {
  open: boolean;
  organizations: Array<Organization>;
  session: Session;
};

export type { SidebarProps };

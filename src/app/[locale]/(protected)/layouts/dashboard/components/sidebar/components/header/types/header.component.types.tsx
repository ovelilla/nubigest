// Types
import type { Organization } from "@/app/[locale]/(protected)/types/protected.types";
import type { Session } from "next-auth";

type HeaderProps = {
  organizations: Array<Organization>;
  session: Session;
};

export type { HeaderProps };

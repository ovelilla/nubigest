// Types
import type { Dispatch, SetStateAction } from "react";
import type { Organization } from "@/app/[locale]/(protected)/types/protected.types";
import type { Session } from "next-auth";

type ContextSwitcherProps = {
  organizations: Array<Organization>;
  session: Session;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

export type { ContextSwitcherProps };

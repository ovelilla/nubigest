import { Organization } from "@/app/[locale]/(protected)/types/protected.types";

type GetUserOrganizationsActionProps = {
  userId: string;
};

type GetUserOrganizationsActionReturn = Array<Organization>;

export type {
  GetUserOrganizationsActionProps,
  GetUserOrganizationsActionReturn,
};

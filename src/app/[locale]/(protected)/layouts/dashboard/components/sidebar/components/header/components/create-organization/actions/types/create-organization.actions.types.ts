// Types
import type { CreateOrganizationSchema } from "../../schemas/types/create-organization.schema.types";
import type { Organization } from "@/app/[locale]/(protected)/types/protected.types";

type CreateOrganizationActionProps = {
  values: CreateOrganizationSchema;
};

type CreateOrganizationSuccess = {
  status: "success";
  message: string;
  organization: Organization;
};

type CreateOrganizationError = {
  status: "error";
  message: string;
};

type CreateOrganizationActionReturn =
  | CreateOrganizationSuccess
  | CreateOrganizationError;

export type { CreateOrganizationActionProps, CreateOrganizationActionReturn };

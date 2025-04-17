// Vendors
import * as z from "zod";
// Schemas
import { getCreateOrganizationSchema } from "../create-organization.schema";

type CreateOrganizationSchema = z.infer<
  ReturnType<typeof getCreateOrganizationSchema>
>;

export type { CreateOrganizationSchema };

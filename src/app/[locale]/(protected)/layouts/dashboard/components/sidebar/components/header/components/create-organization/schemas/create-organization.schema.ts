// Vendors
import * as z from "zod";

const getCreateOrganizationSchema = (t: (arg: string) => string) =>
  z.object({
    name: z
      .string({ required_error: t("schemas.createOrganization.name.required") })
      .min(2, t("schemas.createOrganization.name.min"))
      .max(64, t("schemas.createOrganization.name.max")),
    description: z
      .string()
      .max(255, t("schemas.createOrganization.description.max"))
      .optional(),
  });

export { getCreateOrganizationSchema };

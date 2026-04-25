// Vendors
import * as z from "zod";

const getNameSchema = (t: (arg: string) => string) =>
  z.object({
    name: z
      .string({ error: t("schemas.name.name.required") })
      .trim()
      .min(1, t("schemas.name.name.min"))
      .max(64, t("schemas.name.name.max")),
  });

export { getNameSchema };

// Vendors
import * as z from "zod";

const getPasswordSchema = (t: (arg: string) => string) =>
  z.object({
    password: z
      .string()
      .trim()
      .min(1, { error: t("schemas.password.required") })
      .min(6, { error: t("schemas.password.min") })
      .max(32, { error: t("schemas.password.max") }),
  });

export { getPasswordSchema };

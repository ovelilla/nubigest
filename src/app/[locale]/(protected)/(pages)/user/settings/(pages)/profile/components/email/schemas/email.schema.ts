// Vendors
import * as z from "zod";

const getEmailSchema = (t: (arg: string) => string) =>
  z.object({
    newEmail: z
      .string({ error: t("schemas.email.newEmail.required") })
      .trim()
      .min(1, t("schemas.email.newEmail.required"))
      .max(254, t("schemas.email.newEmail.max"))
      .pipe(z.email({ error: t("schemas.email.newEmail.invalid") }))
      .transform((s) => s.toLowerCase()),
  });

export { getEmailSchema };

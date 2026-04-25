// Vendors
import * as z from "zod";

const getDeleteAccountSchema = (t: (arg: string) => string) =>
  z.object({
    password: z
      .string({ error: t("schemas.deleteAccount.password.required") })
      .trim()
      .min(1, t("schemas.deleteAccount.password.required")),
  });

export { getDeleteAccountSchema };

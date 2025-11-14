// Vendors
import * as z from "zod";

const getSignInSchema = (t: (arg: string) => string) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, { error: t("schemas.signin.email.required") })
      .max(254, { error: t("schemas.signin.email.max") })
      .pipe(z.email({ error: t("schemas.signin.email.invalid") }))
      .transform((s) => s.toLowerCase()),
    password: z
      .string()
      .trim()
      .min(1, { error: t("schemas.signin.password.required") })
      .min(6, { error: t("schemas.signin.password.min") })
      .max(32, { error: t("schemas.signin.password.max") }),
  });

export { getSignInSchema };

// Vendors
import * as z from "zod";

const getForgotPasswordSchema = (t: (arg: string) => string) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, { error: t("schemas.forgotPassword.email.required") })
      .max(254, { error: t("schemas.forgotPassword.email.max") })
      .pipe(z.email({ error: t("schemas.forgotPassword.email.invalid") }))
      .transform((s) => s.toLowerCase()),
  });

export { getForgotPasswordSchema };

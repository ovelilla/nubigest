// Vendors
import * as z from "zod";

const getForgotPasswordSchema = (t: (arg: string) => string) =>
  z.object({
    email: z
      .string({ required_error: t("schemas.forgotPassword.email.required") })
      .min(1, t("schemas.forgotPassword.email.required"))
      .email(t("schemas.forgotPassword.email.invalid")),
  });

export { getForgotPasswordSchema };

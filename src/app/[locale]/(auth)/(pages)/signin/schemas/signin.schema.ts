// Vendors
import * as z from "zod";

const getSignInSchema = (t: (arg: string) => string) =>
  z.object({
    email: z
      .string({ required_error: t("schemas.signin.email.required") })
      .min(1, t("schemas.signin.email.required"))
      .email(t("schemas.signin.email.invalid")),
    password: z
      .string({ required_error: t("schemas.signin.password.required") })
      .min(1, t("schemas.signin.password.required"))
      .min(6, t("schemas.signin.password.min"))
      .max(32, t("schemas.signin.password.max")),
    otp: z.string().optional(),
  });

export { getSignInSchema };

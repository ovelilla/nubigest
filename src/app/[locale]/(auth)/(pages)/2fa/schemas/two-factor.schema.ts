// Vendors
import * as z from "zod";

const getTwoFactorSchema = (t: (arg: string) => string) =>
  z.object({
    otp: z
      .string()
      .min(6, { error: t("schemas.twoFactor.otp.required") })
      .max(6, { error: t("schemas.twoFactor.otp.required") }),
  });

export { getTwoFactorSchema };

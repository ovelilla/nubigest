// Vendors
import * as z from "zod";

const getTwoFactorSchema = (t: (arg: string) => string) =>
  z.object({
    code: z
      .string()
      .min(6, { error: t("schemas.twoFactor.code.required") })
      .max(6, { error: t("schemas.twoFactor.code.required") }),
    trustDevice: z.boolean().optional(),
  });

export { getTwoFactorSchema };

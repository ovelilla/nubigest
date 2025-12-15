// Vendors
import * as z from "zod";

const getTotpSchema = (t: (arg: string) => string) =>
  z.object({
    code: z
      .string()
      .length(6, { error: t("schemas.totp.code.required") })
      .regex(/^\d{6}$/, { error: t("schemas.totp.code.invalid") }),
    trustDevice: z.boolean().optional(),
  });

export { getTotpSchema };

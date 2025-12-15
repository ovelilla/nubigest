// Vendors
import * as z from "zod";

const getOtpSchema = (t: (arg: string) => string) =>
  z.object({
    code: z
      .string()
      .length(6, { error: t("schemas.otp.code.required") })
      .regex(/^\d{6}$/, { message: t("schemas.otp.code.invalid") }),
    trustDevice: z.boolean().optional(),
  });

export { getOtpSchema };

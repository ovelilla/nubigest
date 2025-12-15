// Vendors
import * as z from "zod";

const getBackupCodeSchema = (t: (arg: string) => string) =>
  z.object({
    code: z.string().min(1, { error: t("schemas.backup.code.required") }),
    trustDevice: z.boolean().optional(),
  });

const getOtpSchema = (t: (arg: string) => string) =>
  z.object({
    code: z
      .string()
      .length(6, { error: t("schemas.otp.code.required") })
      .regex(/^\d{6}$/, { message: t("schemas.otp.code.invalid") }),
    trustDevice: z.boolean().optional(),
  });

const getTotpSchema = (t: (arg: string) => string) =>
  z.object({
    code: z
      .string()
      .length(6, { error: t("schemas.totp.code.required") })
      .regex(/^\d{6}$/, { error: t("schemas.totp.code.invalid") }),
    trustDevice: z.boolean().optional(),
  });

export { getBackupCodeSchema, getOtpSchema, getTotpSchema };

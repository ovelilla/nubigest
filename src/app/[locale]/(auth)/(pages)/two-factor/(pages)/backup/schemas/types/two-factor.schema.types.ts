// Vendors
import * as z from "zod";
// Schemas
import {
  getBackupCodeSchema,
  getOtpSchema,
  getTotpSchema,
} from "../two-factor.schema";

type BackupCodeSchema = z.infer<ReturnType<typeof getBackupCodeSchema>>;

type OtpSchema = z.infer<ReturnType<typeof getOtpSchema>>;

type TotpSchema = z.infer<ReturnType<typeof getTotpSchema>>;

export type { BackupCodeSchema, OtpSchema, TotpSchema };

// Vendors
import * as z from "zod";

const getBackupSchema = (t: (arg: string) => string) =>
  z.object({
    code: z.string().min(1, { error: t("schemas.backup.code.required") }),
    trustDevice: z.boolean().optional(),
  });

export { getBackupSchema };

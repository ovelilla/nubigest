// Vendors
import * as z from "zod";
// Schemas
import { getBackupSchema } from "../backup.schema";

type BackupSchema = z.infer<ReturnType<typeof getBackupSchema>>;

export type { BackupSchema };

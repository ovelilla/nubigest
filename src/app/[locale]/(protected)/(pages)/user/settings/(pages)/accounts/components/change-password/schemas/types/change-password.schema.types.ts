// Vendors
import * as z from "zod";
// Schemas
import { getChangePasswordSchema } from "../change-password.schema";

type ChangePasswordSchema = z.infer<ReturnType<typeof getChangePasswordSchema>>;

export type { ChangePasswordSchema };

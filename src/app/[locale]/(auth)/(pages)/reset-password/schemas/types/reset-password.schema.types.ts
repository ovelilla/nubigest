// Vendors
import * as z from "zod";
// Schemas
import { getResetPasswordSchema } from "../reset-password.schema";

type ResetPasswordSchema = z.infer<ReturnType<typeof getResetPasswordSchema>>;

export type { ResetPasswordSchema };

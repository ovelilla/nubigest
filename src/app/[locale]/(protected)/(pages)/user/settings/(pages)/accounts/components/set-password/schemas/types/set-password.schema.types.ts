// Vendors
import * as z from "zod";
// Schemas
import { getSetPasswordSchema } from "../set-password.schema";

type SetPasswordSchema = z.infer<ReturnType<typeof getSetPasswordSchema>>;

export type { SetPasswordSchema };

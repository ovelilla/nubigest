// Vendors
import * as z from "zod";
// Schemas
import { getPasswordSchema } from "../password.schema";

type PasswordSchema = z.infer<ReturnType<typeof getPasswordSchema>>;

export type { PasswordSchema };

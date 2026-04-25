// Vendors
import * as z from "zod";
// Schemas
import { getEmailSchema } from "../email.schema";

type EmailSchema = z.infer<ReturnType<typeof getEmailSchema>>;

export type { EmailSchema };

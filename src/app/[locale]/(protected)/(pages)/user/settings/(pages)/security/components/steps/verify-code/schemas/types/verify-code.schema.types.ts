// Vendors
import * as z from "zod";
// Schemas
import { getTotpSchema } from "../verify-code.schema";

type TotpSchema = z.infer<ReturnType<typeof getTotpSchema>>;

export type { TotpSchema };

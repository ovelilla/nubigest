// Vendors
import * as z from "zod";
// Schemas
import { getTotpSchema } from "../two-factor.schema";

type TotpSchema = z.infer<ReturnType<typeof getTotpSchema>>;

export type { TotpSchema };

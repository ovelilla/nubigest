// Vendors
import * as z from "zod";
// Schemas
import { getTotpSchema } from "../authenticator.schema";

type TotpSchema = z.infer<ReturnType<typeof getTotpSchema>>;

export type { TotpSchema };

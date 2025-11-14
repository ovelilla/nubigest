// Vendors
import * as z from "zod";
// Schemas
import { getTwoFactorSchema } from "../two-factor.schema";

type TwoFactorSchema = z.infer<ReturnType<typeof getTwoFactorSchema>>;

export type { TwoFactorSchema };

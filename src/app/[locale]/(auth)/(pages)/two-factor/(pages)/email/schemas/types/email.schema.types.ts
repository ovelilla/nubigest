// Vendors
import * as z from "zod";
// Schemas
import { getOtpSchema } from "../email.schema";

type OtpSchema = z.infer<ReturnType<typeof getOtpSchema>>;

export type { OtpSchema };

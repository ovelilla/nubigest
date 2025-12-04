// Vendors
import * as z from "zod";
// Schemas
import { getForgotPasswordSchema } from "../forgot-password.schema";

type ForgotPasswordSchema = z.infer<ReturnType<typeof getForgotPasswordSchema>>;

export type { ForgotPasswordSchema };

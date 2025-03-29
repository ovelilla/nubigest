// Vendors
import * as z from "zod";
// Schemas
import { getSignUpSchema } from "../signup.schema";

type SignUpSchema = z.infer<ReturnType<typeof getSignUpSchema>>;

export type { SignUpSchema };

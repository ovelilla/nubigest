// Vendors
import * as z from "zod";
// Schemas
import { getSignInSchema } from "../signin.schema";

type SignInSchema = z.infer<ReturnType<typeof getSignInSchema>>;

export type { SignInSchema };

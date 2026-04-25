// Vendors
import * as z from "zod";
// Schemas
import { getUsernameSchema } from "../username.schema";

type UsernameSchema = z.infer<ReturnType<typeof getUsernameSchema>>;

export type { UsernameSchema };

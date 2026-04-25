// Vendors
import * as z from "zod";
// Schemas
import { getNameSchema } from "../name.schema";

type NameSchema = z.infer<ReturnType<typeof getNameSchema>>;

export type { NameSchema };

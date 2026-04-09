// Vendors
import * as z from "zod";
// Schemas
import { getPasskeySchema } from "../passkey.schema";

type PasskeySchema = z.infer<ReturnType<typeof getPasskeySchema>>;

export type { PasskeySchema };

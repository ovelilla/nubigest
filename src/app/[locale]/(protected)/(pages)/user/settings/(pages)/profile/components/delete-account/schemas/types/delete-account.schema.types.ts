// Vendors
import * as z from "zod";
// Schemas
import { getDeleteAccountSchema } from "../delete-account.schema";

type DeleteAccountSchema = z.infer<ReturnType<typeof getDeleteAccountSchema>>;

export type { DeleteAccountSchema };

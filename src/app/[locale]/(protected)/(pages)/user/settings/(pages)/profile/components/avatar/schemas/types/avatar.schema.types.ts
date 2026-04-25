// Vendors
import * as z from "zod";
// Schemas
import { getAvatarSchema } from "../avatar.schema";

type AvatarSchema = z.infer<ReturnType<typeof getAvatarSchema>>;

export type { AvatarSchema };

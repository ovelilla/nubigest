// Types
import type { Organization as PrismaOrganization } from "@prisma/client";

type Organization = Pick<PrismaOrganization, "id" | "name" | "slug">;

export type { Organization };

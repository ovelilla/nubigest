// Vendors
import { customAlphabet } from "nanoid";
import slugify from "slugify";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type { GenerateUniqueSlugProps } from "./types/generate-unique-slug.types";

const generateUniqueSlug = async ({
  base,
  maxAttempts = 10,
}: GenerateUniqueSlugProps): Promise<string> => {
  const baseSlug = slugify(base, { lower: true, strict: true });
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);

  const tryGenerate = async (attempt = 1): Promise<string> => {
    if (attempt > maxAttempts) {
      throw new Error(
        "Unable to generate a unique slug after multiple attempts",
      );
    }

    const candidate = `${baseSlug}-${nanoid()}`;
    const exists = await prisma.organization.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    return exists ? tryGenerate(attempt + 1) : candidate;
  };

  return tryGenerate();
};

export { generateUniqueSlug };

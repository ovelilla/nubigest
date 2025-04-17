// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  GetOrganizationSlugActionProps,
  GetOrganizationSlugActionReturn,
} from "./types/dashboard.actions.types";

const getOrganizationSlugAction = async ({
  userId,
}: GetOrganizationSlugActionProps): Promise<GetOrganizationSlugActionReturn> => {
  const staff = await prisma.staff.findFirst({
    where: { userId },
    select: {
      organization: {
        select: {
          slug: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return staff?.organization.slug ?? null;
};

export { getOrganizationSlugAction };

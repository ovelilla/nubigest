// Vendors
import { unstable_cache } from "next/cache";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  GetUserOrganizationsActionProps,
  GetUserOrganizationsActionReturn,
} from "./types/dashboard.actions.types";

const getCachedUserOrganizations = ({
  userId,
}: GetUserOrganizationsActionProps): Promise<GetUserOrganizationsActionReturn> =>
  unstable_cache(
    async () => {
      const organizations = await prisma.staff.findMany({
        where: { userId },
        select: {
          organization: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      });

      return organizations.map(({ organization }) => organization);
    },
    [`user-organizations:${userId}`],
    {
      tags: ["user-organizations"],
      revalidate: false,
    },
  )();

const getUserOrganizations = async ({
  userId,
}: GetUserOrganizationsActionProps): Promise<GetUserOrganizationsActionReturn> => {
  const organizations = await prisma.staff.findMany({
    where: { userId },
    select: {
      organization: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  });

  return organizations.map(({ organization }) => organization);
};

export { getCachedUserOrganizations, getUserOrganizations };

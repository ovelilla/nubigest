// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  CheckUserOrganizationActionProps,
  CheckUserOrganizationActionReturn,
} from "./types/organization.actions.types";

const checkUserOrganizationAction = async ({
  userId,
  slug,
}: CheckUserOrganizationActionProps): Promise<CheckUserOrganizationActionReturn> => {
  const staff = await prisma.staff.findFirst({
    where: {
      userId,
      organization: {
        slug,
      },
    },
    select: { id: true },
  });

  return !!staff;
};

export { checkUserOrganizationAction };

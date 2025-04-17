"use server";
// Vendors
import { getTranslations } from "next-intl/server";
// Libs
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
// Schemas
import { getCreateOrganizationSchema } from "../schemas/create-organization.schema";
// Services
import { generateUniqueSlug } from "./services/generate-unique-slug.service";
// Types
import type {
  CreateOrganizationActionProps,
  CreateOrganizationActionReturn,
} from "./types/create-organization.actions.types";

const createOrganizationAction = async ({
  values,
}: CreateOrganizationActionProps): Promise<CreateOrganizationActionReturn> => {
  const t = await getTranslations(
    "protected.layouts.dashboard.components.sidebar.components.header.components.createOrganization",
  );

  const session = await auth();

  if (!session?.user) {
    return {
      status: "error",
      message: t("actions.createOrganization.error.noUser"),
    };
  }

  const createOrganizationSchema = getCreateOrganizationSchema(t);
  const validatedFields = createOrganizationSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: t("actions.createOrganization.error.invalidFields"),
    };
  }

  const { name, description } = validatedFields.data;

  try {
    const slug = await generateUniqueSlug({ base: name });

    const organization = await prisma.organization.create({
      data: {
        name,
        description,
        slug,
        staff: {
          create: {
            userId: session.user.id,
            role: "OWNER",
          },
        },
      },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });

    return {
      status: "success",
      message: t("actions.createOrganization.success"),
      organization,
    };
  } catch (error) {
    console.error("Error creating organization", error);
    return {
      status: "error",
      message: t("actions.createOrganization.error.generic"),
    };
  }
};

export { createOrganizationAction };

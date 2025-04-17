// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/create-organization.constants";
// Handlers
import { CreateOrganizationHandlers } from "../handlers/create-organization.handlers";
// Schemas
import { getCreateOrganizationSchema } from "../schemas/create-organization.schema";
// Types
import type { CreateOrganizationHookProps } from "./types/create-organization.hook.types";
import type { CreateOrganizationSchema } from "../schemas/types/create-organization.schema.types";

const CreateOrganizationHook = ({
  setOpenDialog,
}: CreateOrganizationHookProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const t = useTranslations(
    "protected.layouts.dashboard.components.sidebar.components.header.components.createOrganization",
  );

  const createOrganizationSchema = getCreateOrganizationSchema(t);

  const form = useForm<CreateOrganizationSchema>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleOpenChange, handleSubmit } = CreateOrganizationHandlers({
    form,
    setLoading,
    setOpenDialog,
    t,
  });

  return { form, handleOpenChange, handleSubmit, loading, t };
};

export { CreateOrganizationHook };

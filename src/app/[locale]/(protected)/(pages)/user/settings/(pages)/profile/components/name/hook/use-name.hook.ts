// Vendors
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_VALUES } from "../constants/name.constants";
// Handlers
import { NameHandlers } from "../handlers/name.handlers";
// Schemas
import { getNameSchema } from "../schemas/name.schema";
// Types
import type { NameSchema } from "../schemas/types/name.schema.types";

const useName = () => {
  const {
    data: sessionData,
    isPending: isSessionPending,
    refetch,
  } = authClient.useSession();

  const t = useTranslations("profileSettings.components.name");

  const nameSchema = getNameSchema(t);

  const form = useForm<NameSchema>({
    resolver: zodResolver(nameSchema),
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (sessionData?.user) {
      form.reset({
        name: sessionData.user.name ?? "",
      });
    }
  }, [sessionData, form]);

  const { handleSubmit } = NameHandlers({ form, refetch, t });

  return { form, handleSubmit, isSessionPending, t };
};

export { useName };

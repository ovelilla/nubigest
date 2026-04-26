// Vendors
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_VALUES } from "../constants/username.constants";
// Handlers
import { UsernameHandlers } from "../handlers/username.handlers";
// Schemas
import { getUsernameSchema } from "../schemas/username.schema";
// Types
import type { UsernameSchema } from "../schemas/types/username.schema.types";

const useUsername = () => {
  const {
    data: sessionData,
    isPending: isSessionPending,
    refetch,
  } = authClient.useSession();

  const t = useTranslations("profileSettings.components.username");

  const usernameSchema = getUsernameSchema(t);

  const form = useForm<UsernameSchema>({
    resolver: zodResolver(usernameSchema),
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (sessionData?.user) {
      form.reset({
        username: sessionData.user.username ?? "",
      });
    }
  }, [sessionData, form]);

  const { handleSubmit } = UsernameHandlers({ form, refetch, sessionData, t });

  return { form, handleSubmit, isSessionPending, t };
};

export { useUsername };

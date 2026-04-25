// Vendors
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_VALUES } from "../constants/email.constants";
// Handlers
import { EmailHandlers } from "../handlers/email.handlers";
// Schemas
import { getEmailSchema } from "../schemas/email.schema";
// Types
import type { EmailSchema } from "../schemas/types/email.schema.types";

const useEmail = () => {
  const { data: sessionData, isPending: isSessionPending } =
    authClient.useSession();

  const t = useTranslations("profileSettings.components.email");

  const emailSchema = getEmailSchema(t);

  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (sessionData?.user) {
      form.reset({
        newEmail: sessionData.user.email ?? "",
      });
    }
  }, [sessionData, form]);

  const { handleSubmit } = EmailHandlers({ form, sessionData, t });

  return { form, handleSubmit, isSessionPending, t };
};

export { useEmail };

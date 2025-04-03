// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/forgot-password.constants";
// Handlers
import { ForgotPasswordHandlers } from "../handlers/forgot-password.handlers";
// Schemas
import { getForgotPasswordSchema } from "../schemas/forgot-password.schema";
// Types
import type { ForgotPasswordSchema } from "../schemas/types/forgot-password.schema.types";
import type { ForgotPasswordHookReturn } from "./types/forgot-password.hook.types";

const ForgotPasswordHook = (): ForgotPasswordHookReturn => {
  const [loading, setLoading] = useState<boolean>(false);

  const t = useTranslations("forgotPassword");

  const forgotPasswordSchema = getForgotPasswordSchema(t);

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit } = ForgotPasswordHandlers({
    form,
    setLoading,
    t,
  });

  return {
    form,
    handleSubmit,
    loading,
    t,
  };
};

export { ForgotPasswordHook };

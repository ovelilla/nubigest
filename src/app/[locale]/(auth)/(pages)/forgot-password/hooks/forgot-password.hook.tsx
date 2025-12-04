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

const ForgotPasswordHook = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const tForgotPassword = useTranslations("forgotPassword");
  const tAuth = useTranslations("auth");

  const forgotPasswordSchema = getForgotPasswordSchema(tForgotPassword);

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit } = ForgotPasswordHandlers({
    form,
    setLoading,
    tAuth,
    tForgotPassword,
  });

  return {
    form,
    handleSubmit,
    loading,
    t: tForgotPassword,
  };
};

export { ForgotPasswordHook };

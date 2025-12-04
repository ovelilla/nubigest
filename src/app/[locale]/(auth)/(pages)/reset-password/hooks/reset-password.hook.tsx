// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/reset-password.constants";
// Handlers
import { ResetPasswordHandlers } from "../handlers/reset-password.handlers";
// Schemas
import { getResetPasswordSchema } from "../schemas/reset-password.schema";
// Types
import type { ResetPasswordSchema } from "../schemas/types/reset-password.schema.types";

const ResetPasswordHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const error = searchParams.get("error");

  const isInvalidToken = !token || error === "INVALID_TOKEN";

  const tResetPassword = useTranslations("resetPassword");
  const tAuth = useTranslations("auth");

  const router = useRouter();

  const resetPasswordSchema = getResetPasswordSchema(tResetPassword);

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit, handleToggleShowPassword } = ResetPasswordHandlers({
    form,
    router,
    setLoading,
    setShowPassword,
    showPassword,
    tAuth,
    tResetPassword,
    token,
  });

  return {
    form,
    handleSubmit,
    handleToggleShowPassword,
    isInvalidToken,
    loading,
    showPassword,
    t: tResetPassword,
  };
};

export { ResetPasswordHook };

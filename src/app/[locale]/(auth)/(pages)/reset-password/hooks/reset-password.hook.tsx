// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
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
import type { ResetPasswordHookProps } from "./types/reset-password.hook.types";
import type { ResetPasswordSchema } from "../schemas/types/reset-password.schema.types";

const ResetPasswordHook = ({ error, token }: ResetPasswordHookProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const tResetPassword = useTranslations("resetPassword");
  const tAuth = useTranslations("auth");

  const router = useRouter();

  const resetPasswordSchema = getResetPasswordSchema(tResetPassword);

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const isInvalidToken = !token || error === "INVALID_TOKEN";

  const { handleSubmit } = ResetPasswordHandlers({
    form,
    router,
    setLoading,
    tAuth,
    tResetPassword,
    token,
  });

  return {
    form,
    handleSubmit,
    isInvalidToken,
    loading,
    t: tResetPassword,
  };
};

export { ResetPasswordHook };

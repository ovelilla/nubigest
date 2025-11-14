// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/two-factor.constants";
// Handlers
import { SignInHandlers } from "../handlers/two-factor.handlers";
// Schemas
import { getTwoFactorSchema } from "../schemas/two-factor.schema";
// Types
import type { TwoFactorSchema } from "../schemas/types/two-factor.schema.types";

const TwoFactorHook = () => {
  const [loading, setLoading] = useState(false);

  const tTwoFactor = useTranslations("twoFactor");
  const tAuth = useTranslations("auth");

  const twoFactorSchema = getTwoFactorSchema(tTwoFactor);
  const form = useForm<TwoFactorSchema>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: DEFAULT_VALUES,
  });

  // const router = useRouter();

  const { handleSubmit } = SignInHandlers({
    form,
    setLoading,
    tAuth,
    tTwoFactor,
  });

  return {
    form,
    handleSubmit,
    loading,
    t: tTwoFactor,
  };
};

export { TwoFactorHook };

// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/authenticator.constants";
// Handlers
import { TwoFactorHandlers } from "../handlers/authenticator.handlers";
// Schemas
import { getTotpSchema } from "../schemas/authenticator.schema";
// Types
import type { TotpSchema } from "../schemas/types/authenticator.schema.types";

const AuthenticatorHook = () => {
  const [loading, setLoading] = useState(false);

  const t = useTranslations("authenticator");

  const totpSchema = getTotpSchema(t);

  const form = useForm<TotpSchema>({
    resolver: zodResolver(totpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const router = useRouter();

  const { handleSubmit } = TwoFactorHandlers({
    form,
    router,
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

export { AuthenticatorHook };

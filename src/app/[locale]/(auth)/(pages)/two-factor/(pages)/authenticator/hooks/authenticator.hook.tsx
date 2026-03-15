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

  const tAuthenticator = useTranslations("authenticator");
  const tTwoFactor = useTranslations("twoFactor");

  const totpSchema = getTotpSchema(tAuthenticator);

  const form = useForm<TotpSchema>({
    resolver: zodResolver(totpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const router = useRouter();

  const { handleSubmit } = TwoFactorHandlers({
    form,
    router,
    setLoading,
    tAuthenticator,
    tTwoFactor,
  });

  return {
    form,
    handleSubmit,
    loading,
    t: tAuthenticator,
  };
};

export { AuthenticatorHook };

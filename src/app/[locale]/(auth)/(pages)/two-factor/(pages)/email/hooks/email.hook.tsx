// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { OTP_COOLDOWN_MS } from "../constants/email.constants";
// Constants
import { DEFAULT_VALUES } from "../constants/email.constants";
// Handlers
import { EmailHandlers } from "../handlers/email.handlers";
// Hooks
import { useCooldown } from "@/hooks/use-coldown";
// i18n
import { useRouter } from "@/i18n/navigation";
// Schemas
import { getOtpSchema } from "../schemas/email.schema";
// Types
import type { OtpSchema } from "../schemas/types/email.schema.types";
// Utils
import { getRetryAfter } from "@/utils/auth/get-retry-after/get-retry-after.util";

const EmailHook = () => {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const t = useTranslations("email");

  const otpSchema = getOtpSchema(t);

  const form = useForm<OtpSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const router = useRouter();

  const { cooldown, start: startCooldown } = useCooldown();

  useEffect(() => {
    const sendTwoFactorOtp = async () => {
      await authClient.twoFactor.sendOtp({
        fetchOptions: {
          onResponse: () => {
            setIsInitializing(false);
          },
          onError: async ({ response }) => {
            if (response.status === 429) {
              const retryAfter = getRetryAfter(response.headers);
              startCooldown(retryAfter ?? OTP_COOLDOWN_MS / 1000);
              return;
            }
          },
          onSuccess: async () => {
            startCooldown(OTP_COOLDOWN_MS / 1000);
          },
        },
      });
    };

    sendTwoFactorOtp();
  }, [router, startCooldown]);

  const { handleResend, handleSubmit } = EmailHandlers({
    form,
    router,
    setLoadingEmail,
    setLoadingVerify,
    startCooldown,
    t,
  });

  return {
    cooldown,
    form,
    handleResend,
    handleSubmit,
    isInitializing,
    loadingEmail,
    loadingVerify,
    t,
  };
};

export { EmailHook };

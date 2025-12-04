// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/two-factor.constants";
// Handlers
import { TwoFactorHandlers } from "../handlers/two-factor.handlers";
// Schemas
import { getTwoFactorSchema } from "../schemas/two-factor.schema";
// Services
import { sendTwoFactorOtp } from "../services/send-two-factor-otp/send-two-factor-otp.service";
// Types
import type { TwoFactorSchema } from "../schemas/types/two-factor.schema.types";

const TwoFactorHook = () => {
  const [cooldown, setCooldown] = useState(0);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  const hasSentOtpRef = useRef(false);

  const t = useTranslations("twoFactor");

  const twoFactorSchema = getTwoFactorSchema(t);
  const form = useForm<TwoFactorSchema>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const router = useRouter();

  const { handleResend, handleSubmit } = TwoFactorHandlers({
    form,
    router,
    setCooldown,
    setLoadingEmail,
    setLoadingVerify,
    t,
  });

  useEffect(() => {
    if (!hasSentOtpRef.current) {
      hasSentOtpRef.current = true;
      sendTwoFactorOtp({ setLoadingEmail, t });
    }
  }, [t]);

  useEffect(() => {
    if (cooldown === 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  return {
    cooldown,
    form,
    handleResend,
    handleSubmit,
    loadingEmail,
    loadingVerify,
    t,
  };
};

export { TwoFactorHook };

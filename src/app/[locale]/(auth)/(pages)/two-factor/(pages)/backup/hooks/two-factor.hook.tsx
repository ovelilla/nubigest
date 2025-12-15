// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import {
  BACKUP_CODE_DEFAULT_VALUES,
  OTP_DEFAULT_VALUES,
  TOTP_DEFAULT_VALUES,
} from "../constants/two-factor.constants";
// Handlers
import { TwoFactorHandlers } from "../handlers/two-factor.handlers";
// Schemas
import {
  getBackupCodeSchema,
  getOtpSchema,
  getTotpSchema,
} from "../schemas/two-factor.schema";
// Services
import { sendTwoFactorOtp } from "../services/send-two-factor-otp/send-two-factor-otp.service";
// Types
import type {
  BackupCodeSchema,
  OtpSchema,
  TotpSchema,
} from "../schemas/types/two-factor.schema.types";

const TwoFactorHook = () => {
  const [cooldown, setCooldown] = useState(0);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  const hasSentOtpRef = useRef(false);

  const t = useTranslations("twoFactor");

  const backupCodeSchema = getBackupCodeSchema(t);
  const otpSchema = getOtpSchema(t);
  const totpSchema = getTotpSchema(t);

  const backupCodeForm = useForm<BackupCodeSchema>({
    resolver: zodResolver(backupCodeSchema),
    defaultValues: BACKUP_CODE_DEFAULT_VALUES,
  });
  const otpForm = useForm<OtpSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: OTP_DEFAULT_VALUES,
  });
  const totpForm = useForm<TotpSchema>({
    resolver: zodResolver(totpSchema),
    defaultValues: TOTP_DEFAULT_VALUES,
  });

  const router = useRouter();

  const session = authClient.useSession();

  console.log("Session in 2FA hook:", session);

  const { handleResend, handleSubmit } = TwoFactorHandlers({
    backupCodeForm,
    otpForm,
    router,
    setCooldown,
    setLoadingEmail,
    setLoadingVerify,
    t,
    totpForm,
  });

  // useEffect(() => {
  //   if (!hasSentOtpRef.current) {
  //     hasSentOtpRef.current = true;
  //     sendTwoFactorOtp({ setLoadingEmail, t });
  //   }
  // }, [t]);

  useEffect(() => {
    if (cooldown === 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  return {
    backupCodeForm,
    cooldown,
    handleResend,
    handleSubmit,
    loadingEmail,
    loadingVerify,
    otpForm,
    t,
    totpForm,
  };
};

export { TwoFactorHook };

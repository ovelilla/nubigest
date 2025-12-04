// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type { SendTwoFactorOtp } from "./types/send-two-factor-otp.service.types";

const sendTwoFactorOtp: SendTwoFactorOtp = async ({ setLoadingEmail, t }) => {
  try {
    setLoadingEmail(true);

    const { error } = await authClient.twoFactor.sendOtp();

    if (error?.status === 429) {
      toast.error(t("services.sendTwoFactorOtp.error.rateLimitExceeded"));
      return;
    }

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      toast.error(
        t.has(key) ? t(key) : t("services.sendTwoFactorOtp.error.generic"),
      );
      return;
    }
    toast.success(t("services.sendTwoFactorOtp.success"));
  } catch (error) {
    console.error(error);
    toast.error(t("services.sendTwoFactorOtp.error.generic"));
  } finally {
    setLoadingEmail(false);
  }
};

export { sendTwoFactorOtp };

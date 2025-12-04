// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type {
  ResendHandler,
  VerifyHandlersProps,
  VerifyHandlersReturn,
} from "./types/verify.handlers.types";

const resendHandler: ResendHandler = async ({
  email,
  setCooldown,
  setLoading,
  tAuth,
  tVerify,
}) => {
  try {
    if (!email) {
      toast.error(tVerify("handlers.resend.error.generic"));
      return;
    }

    setLoading(true);

    const { error } = await authClient.sendVerificationEmail({
      email,
      callbackURL: DEFAULT_REDIRECT,
    });

    if (error?.status === 429) {
      toast.error(tVerify("handlers.resend.error.rateLimitExceeded"));
      return;
    }

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      toast.error(
        tAuth.has(key) ? tAuth(key) : tVerify("handlers.resend.error.generic"),
      );
      return;
    }

    setCooldown(30);

    toast.success(tVerify("handlers.resend.success"));
  } catch (error) {
    console.error(error);
    toast.error(tVerify("handlers.resend.error.generic"));
  } finally {
    setLoading(false);
  }
};

const VerifyHandlers = ({
  email,
  setCooldown,
  setLoading,
  tAuth,
  tVerify,
}: VerifyHandlersProps): VerifyHandlersReturn => {
  return {
    handleResend: () =>
      resendHandler({ email, setCooldown, setLoading, tAuth, tVerify }),
  };
};

export { VerifyHandlers };

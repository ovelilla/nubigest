// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
import { VERIFY_COOLDOWN_MS } from "../constants/verify.constants";
// Types
import type {
  ResendHandler,
  VerifyHandlersProps,
  VerifyHandlersReturn,
} from "./types/verify.handlers.types";
// Utils
import { getRetryAfter } from "@/utils/auth/get-retry-after/get-retry-after.util";

const resendHandler: ResendHandler = async ({
  email,
  startCooldown,
  setLoading,
  tAuth,
  tVerify,
}) => {
  try {
    await authClient.sendVerificationEmail({
      callbackURL: DEFAULT_REDIRECT,
      email,
      fetchOptions: {
        onRequest: () => {
          setLoading(true);
        },
        onResponse: () => {
          setLoading(false);
        },
        onError: async ({ error, response }) => {
          if (response.status === 429) {
            const retryAfter = getRetryAfter(response.headers);
            startCooldown(retryAfter ?? VERIFY_COOLDOWN_MS / 1000);
            return;
          }
          const key = `errors.${error.code ?? ""}`;
          toast.error(
            tAuth.has(key)
              ? tAuth(key)
              : tVerify("handlers.resend.error.generic"),
          );
        },
        onSuccess: async () => {
          startCooldown(VERIFY_COOLDOWN_MS / 1000);
          toast.success(tVerify("handlers.resend.success"));
        },
      },
    });
  } catch (error) {
    console.error(error);
    toast.error(tVerify("handlers.resend.error.generic"));
  } finally {
    setLoading(false);
  }
};

const VerifyHandlers = ({
  email,
  startCooldown,
  setLoading,
  tAuth,
  tVerify,
}: VerifyHandlersProps): VerifyHandlersReturn => {
  return {
    handleResend: () =>
      resendHandler({ email, startCooldown, setLoading, tAuth, tVerify }),
  };
};

export { VerifyHandlers };

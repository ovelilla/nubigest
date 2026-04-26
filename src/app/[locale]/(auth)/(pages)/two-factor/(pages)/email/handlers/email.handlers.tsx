// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
import { OTP_COOLDOWN_MS } from "../constants/email.constants";
// Types
import type {
  HandleResend,
  EmailHandlersProps,
  EmailHandlersReturn,
  HandleSubmit,
} from "./types/email.handlers.types";

const handleResend: HandleResend = async ({
  setLoadingEmail,
  startCooldown,
  tEmail,
  tTwoFactor,
}) => {
  try {
    await authClient.twoFactor.sendOtp({
      fetchOptions: {
        onRequest: () => {
          setLoadingEmail(true);
        },
        onResponse: () => {
          setLoadingEmail(false);
        },
        onError: async ({ error }) => {
          const key = `errors.${error.code ?? ""}`;
          toast.error(
            tTwoFactor.has(key)
              ? tTwoFactor(key)
              : tEmail("handlers.resend.error.generic"),
          );
        },
        onSuccess: async () => {
          startCooldown(OTP_COOLDOWN_MS / 1000);
          toast.success(tEmail("handlers.resend.success"));
        },
      },
    });
  } catch (error) {
    console.error(error);
    toast.error(tEmail("handlers.resend.error.generic"));
  }
};

const handleSubmit: HandleSubmit = async ({
  form,
  router,
  setLoadingVerify,
  tEmail,
  tTwoFactor,
  values,
}) => {
  try {
    setLoadingVerify(true);

    const { error } = await authClient.twoFactor.verifyOtp({
      code: values.code,
      trustDevice: values.trustDevice,
    });

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      const message = tTwoFactor.has(key)
        ? tTwoFactor(key)
        : tEmail("handlers.submit.error.generic");
      toast.error(message);
      form.setValue("code", "");
      return;
    }

    toast.success(tEmail("handlers.submit.success"));
    form.reset();
    router.push(DEFAULT_REDIRECT);
  } catch (error) {
    console.error(error);
    toast.error(tEmail("handlers.submit.error.generic"));
  } finally {
    setLoadingVerify(false);
  }
};

const EmailHandlers = ({
  form,
  router,
  setLoadingEmail,
  setLoadingVerify,
  startCooldown,
  tEmail,
  tTwoFactor,
}: EmailHandlersProps): EmailHandlersReturn => {
  return {
    handleResend: () =>
      handleResend({ setLoadingEmail, startCooldown, tEmail, tTwoFactor }),
    handleSubmit: (values) =>
      handleSubmit({
        form,
        router,
        setLoadingVerify,
        tEmail,
        tTwoFactor,
        values,
      }),
  };
};

export { EmailHandlers };

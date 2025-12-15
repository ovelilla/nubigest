// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
import { OTP_COOLDOWN_MS } from "../constants/email.constants";
// Types
import type { OtpSchema } from "../schemas/types/email.schema.types";
import type {
  ResendHandler,
  EmailHandlersProps,
  EmailHandlersReturn,
  SubmitHandler,
} from "./types/email.handlers.types";

const resendHandler: ResendHandler = async ({
  setLoadingEmail,
  startCooldown,
  t,
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
          toast.error(t.has(key) ? t(key) : t("handlers.resend.error.generic"));
        },
        onSuccess: async () => {
          startCooldown(OTP_COOLDOWN_MS / 1000);
          toast.success(t("handlers.resend.success"));
        },
      },
    });
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.resend.error.generic"));
  }
};

const submitHandler: SubmitHandler = async ({
  form,
  router,
  setLoadingVerify,
  t,
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
      const message = t.has(key) ? t(key) : t("handlers.submit.error.generic");
      toast.error(message);
      form.setValue("code", "");
      return;
    }

    toast.success(t("handlers.submit.success"));
    form.reset();
    router.push(DEFAULT_REDIRECT);
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.submit.error.generic"));
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
  t,
}: EmailHandlersProps): EmailHandlersReturn => {
  return {
    handleResend: () => resendHandler({ setLoadingEmail, startCooldown, t }),
    handleSubmit: (values: OtpSchema) =>
      submitHandler({
        form,
        router,
        setLoadingVerify,
        t,
        values,
      }),
  };
};

export { EmailHandlers };

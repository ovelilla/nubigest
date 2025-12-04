// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type { TwoFactorSchema } from "../schemas/types/two-factor.schema.types";
import type {
  ResendHandler,
  TwoFactorHandlersProps,
  TwoFactorHandlersReturn,
  SubmitHandler,
} from "./types/two-factor.handlers.types";

const resendHandler: ResendHandler = async ({
  setCooldown,
  setLoadingEmail,
  t,
}) => {
  try {
    setLoadingEmail(true);

    const { error } = await authClient.twoFactor.sendOtp();

    if (error?.status === 429) {
      toast.error(t("handlers.resend.error.rateLimitExceeded"));
      return;
    }

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      toast.error(t.has(key) ? t(key) : t("handlers.resend.error.generic"));
      return;
    }

    setCooldown(30);

    toast.success(t("handlers.resend.success"));
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.resend.error.generic"));
  } finally {
    setLoadingEmail(false);
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

const TwoFactorHandlers = ({
  form,
  router,
  setCooldown,
  setLoadingEmail,
  setLoadingVerify,
  t,
}: TwoFactorHandlersProps): TwoFactorHandlersReturn => {
  return {
    handleResend: () => resendHandler({ setCooldown, setLoadingEmail, t }),
    handleSubmit: (values: TwoFactorSchema) =>
      submitHandler({
        form,
        router,
        setLoadingVerify,
        t,
        values,
      }),
  };
};

export { TwoFactorHandlers };

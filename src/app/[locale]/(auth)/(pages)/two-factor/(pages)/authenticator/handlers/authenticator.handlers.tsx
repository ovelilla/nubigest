// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type {
  TwoFactorHandlersProps,
  TwoFactorHandlersReturn,
  SubmitHandler,
} from "./types/authenticator.handlers.types";

const submitHandler: SubmitHandler = async ({
  form,
  router,
  setLoading,
  tAuthenticator,
  tTwoFactor,
  values,
}) => {
  try {
    setLoading(true);

    const { error } = await authClient.twoFactor.verifyTotp({
      code: values.code,
      trustDevice: values.trustDevice,
    });

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      const message = tTwoFactor.has(key)
        ? tTwoFactor(key)
        : tAuthenticator("handlers.submit.error.generic");
      toast.error(message);
      form.setValue("code", "");
      return;
    }

    toast.success(tAuthenticator("handlers.submit.success"));
    form.reset();
    router.push(DEFAULT_REDIRECT);
  } catch (error) {
    console.error(error);
    toast.error(tAuthenticator("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const TwoFactorHandlers = ({
  form,
  router,
  setLoading,
  tAuthenticator,
  tTwoFactor,
}: TwoFactorHandlersProps): TwoFactorHandlersReturn => {
  return {
    handleSubmit: (values) =>
      submitHandler({
        form,
        router,
        setLoading,
        tAuthenticator,
        tTwoFactor,
        values,
      }),
  };
};

export { TwoFactorHandlers };

// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type { TotpSchema } from "../schemas/types/authenticator.schema.types";
import type {
  TwoFactorHandlersProps,
  TwoFactorHandlersReturn,
  SubmitHandler,
} from "./types/authenticator.handlers.types";

const submitHandler: SubmitHandler = async ({
  form,
  router,
  setLoading,
  t,
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
    setLoading(false);
  }
};

const TwoFactorHandlers = ({
  form,
  router,
  setLoading,
  t,
}: TwoFactorHandlersProps): TwoFactorHandlersReturn => {
  return {
    handleSubmit: (values: TotpSchema) =>
      submitHandler({
        form,
        router,
        setLoading,
        t,
        values,
      }),
  };
};

export { TwoFactorHandlers };

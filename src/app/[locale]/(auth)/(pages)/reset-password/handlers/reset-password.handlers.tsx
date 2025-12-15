// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  SubmitHandler,
} from "./types/reset-password.handlers.types";
import type { ResetPasswordSchema } from "../schemas/types/reset-password.schema.types";

const submitHandler: SubmitHandler = async ({
  form,
  router,
  setLoading,
  tAuth,
  tResetPassword,
  token,
  values,
}) => {
  try {
    setLoading(true);
    const { error } = await authClient.resetPassword({
      newPassword: values.password,
      token,
    });
    if (error) {
      const key = `errors.${error.code ?? ""}`;
      const message = tAuth.has(key)
        ? tAuth(key)
        : tResetPassword("handlers.submit.error.generic");
      toast.error(message);
      return;
    }

    form.reset();
    router.push({
      pathname: "/signin",
      query: { reset: "success" },
    });
  } catch (error) {
    console.error(error);
    toast.error(tResetPassword("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const ResetPasswordHandlers = ({
  form,
  router,
  setLoading,
  tAuth,
  tResetPassword,
  token,
}: ResetPasswordHandlersProps): ResetPasswordHandlersReturn => {
  return {
    handleSubmit: (values: ResetPasswordSchema) =>
      submitHandler({
        form,
        router,
        setLoading,
        tAuth,
        tResetPassword,
        token,
        values,
      }),
  };
};

export { ResetPasswordHandlers };

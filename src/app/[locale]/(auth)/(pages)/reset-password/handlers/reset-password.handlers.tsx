// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  HandleSubmit,
} from "./types/reset-password.handlers.types";

const handleSubmit: HandleSubmit = async ({
  form,
  router,
  setLoading,
  tResetPassword,
  tErrors,
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
      if (error.code && tErrors.has(error.code)) {
        toast.error(tErrors(error.code));
        return;
      }
      toast.error(tResetPassword("handlers.submit.error.generic"));
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
  tResetPassword,
  tErrors,
  token,
}: ResetPasswordHandlersProps): ResetPasswordHandlersReturn => {
  return {
    handleSubmit: (values) =>
      handleSubmit({
        form,
        router,
        setLoading,
        tResetPassword,
        tErrors,
        token,
        values,
      }),
  };
};

export { ResetPasswordHandlers };

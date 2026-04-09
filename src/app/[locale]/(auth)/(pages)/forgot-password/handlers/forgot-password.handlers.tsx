// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  ForgotPasswordHandlersProps,
  ForgotPasswordHandlersReturn,
  SubmitHandler,
} from "./types/forgot-password.handlers.types";

const submitHandler: SubmitHandler = async ({
  form,
  setLoading,
  tForgotPassword,
  tErrors,
  values,
}) => {
  try {
    setLoading(true);
    const { error } = await authClient.requestPasswordReset({
      email: values.email,
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    });
    if (error) {
      if (error.code && tErrors.has(error.code)) {
        toast.error(tErrors(error.code));
        return;
      }

      toast.error(tForgotPassword("handlers.submit.error.generic"));
      return;
    }
    toast.success(tForgotPassword("handlers.submit.success"));
    form.reset();
  } catch (error) {
    console.error(error);
    toast.error(tForgotPassword("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const ForgotPasswordHandlers = ({
  form,
  setLoading,
  tForgotPassword,
  tErrors,
}: ForgotPasswordHandlersProps): ForgotPasswordHandlersReturn => {
  return {
    handleSubmit: (values) =>
      submitHandler({
        form,
        setLoading,
        tErrors,
        tForgotPassword,
        values,
      }),
  };
};

export { ForgotPasswordHandlers };

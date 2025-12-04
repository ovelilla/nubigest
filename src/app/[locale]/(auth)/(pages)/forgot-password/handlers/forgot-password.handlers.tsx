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
import type { ForgotPasswordSchema } from "../schemas/types/forgot-password.schema.types";

const submitHandler: SubmitHandler = async ({
  form,
  setLoading,
  tAuth,
  tForgotPassword,
  values,
}) => {
  try {
    setLoading(true);
    const { error } = await authClient.requestPasswordReset({
      email: values.email,
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    });
    if (error) {
      const key = `errors.${error.code ?? ""}`;
      const message = tAuth.has(key)
        ? tAuth(key)
        : tForgotPassword("handlers.submit.error.generic");
      toast.error(message);
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
  tAuth,
  tForgotPassword,
}: ForgotPasswordHandlersProps): ForgotPasswordHandlersReturn => {
  return {
    handleSubmit: (values: ForgotPasswordSchema) =>
      submitHandler({
        form,
        setLoading,
        tAuth,
        tForgotPassword,
        values,
      }),
  };
};

export { ForgotPasswordHandlers };

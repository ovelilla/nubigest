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

const submitHandler: SubmitHandler = async ({
  form,
  router,
  setLoading,
  tResetPassword,
  tRoot,
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
      const message = tRoot.has(key)
        ? tRoot(key)
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
  tResetPassword,
  tRoot,
  token,
}: ResetPasswordHandlersProps): ResetPasswordHandlersReturn => {
  return {
    handleSubmit: (values) =>
      submitHandler({
        form,
        router,
        setLoading,
        tResetPassword,
        tRoot,
        token,
        values,
      }),
  };
};

export { ResetPasswordHandlers };

// Vendors
import { toast } from "sonner";
// Actions
import { resetPasswordAction } from "../actions/reset-password.action";
// Types
import type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/reset-password.handlers.types";
import type { ResetPasswordSchema } from "../schemas/types/reset-password.schema.types";

const submitHandler = async ({
  form,
  setLoading,
  t,
  token,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);
  console.log("token", token);

  try {
    const result = await resetPasswordAction({ values, token });

    if (result.status === "error") {
      toast.error(result.message);
      form.setValue("password", "");
      return;
    }

    if (result.status === "success") {
      toast.success(result.message);
      form.reset();
      return;
    }
  } catch (error) {
    console.error("Error in oautClickHandler", error);
    toast.error(t("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const ResetPasswordHandlers = ({
  form,
  setShowPassword,
  setLoading,
  showPassword,
  t,
  token,
}: ResetPasswordHandlersProps): ResetPasswordHandlersReturn => {
  return {
    handleSubmit: (values: ResetPasswordSchema) =>
      submitHandler({
        form,
        setLoading,
        t,
        token,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { ResetPasswordHandlers };

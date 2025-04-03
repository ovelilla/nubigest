// Vendors
import { toast } from "sonner";
// Actions
import { forgotPasswordAction } from "../actions/forgot-password.action";
// Types
import type {
  ForgotPasswordHandlersProps,
  ForgotPasswordHandlersReturn,
  SubmitHandlerProps,
} from "./types/forgot-password.handlers.types";
import type { ForgotPasswordSchema } from "../schemas/types/forgot-password.schema.types";

const submitHandler = async ({
  form,
  setLoading,
  t,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);

  try {
    const result = await forgotPasswordAction({ values });

    if (result.status === "error") {
      toast.error(result.message);
      return;
    }

    if (result.status === "success") {
      toast.success(result.message);
      form.reset();
      return;
    }
  } catch (error) {
    console.error("Error in submitHandler", error);
    toast.error(t("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const ForgotPasswordHandlers = ({
  form,
  setLoading,
  t,
}: ForgotPasswordHandlersProps): ForgotPasswordHandlersReturn => {
  return {
    handleSubmit: (values: ForgotPasswordSchema) =>
      submitHandler({
        form,
        setLoading,
        t,
        values,
      }),
  };
};

export { ForgotPasswordHandlers };

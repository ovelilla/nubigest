// Actions
import { registerAction } from "../actions/register.action";
// Types
import type { RegisterSchema } from "../schemas/types/register.schema.types";
import type {
  RegisterHandlersProps,
  RegisterHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/register.handlers.types";

const submitHandler = async ({
  form,
  setAlert,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setAlert(null);
  setLoading(true);

  try {
    const { error, success } = (await registerAction({ values })) ?? {};

    if (error) {
      setAlert({ type: "error", message: error });
    }

    if (success) {
      setAlert({ type: "success", message: success });
    }
  } catch {
    setAlert({ type: "error", message: "Algo salió mal" });
  } finally {
    form.reset();
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const RegisterHandlers = ({
  form,
  setAlert,
  setShowPassword,
  setLoading,
  showPassword,
}: RegisterHandlersProps): RegisterHandlersReturn => {
  return {
    handleSubmit: (values: RegisterSchema) =>
      submitHandler({
        form,
        setAlert,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { RegisterHandlers };

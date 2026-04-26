// Vendors
import { toast } from "sonner";
// Types
import type {
  PasswordHandlersProps,
  PasswordHandlersReturn,
  HandleSubmit,
} from "./types/password.handlers.types";

const handleSubmit: HandleSubmit = async ({
  data,
  form,
  onNext,
  tErrors,
}) => {
  const result = await onNext(data);

  if (result.code === "INVALID_PASSWORD") {
    form.setError("password", {
      type: "server",
      message: tErrors(result.code, {
        default: tErrors("DEFAULT"),
      }),
    });
    return;
  }

  if (result.code !== "SUCCESS") {
    toast.error(tErrors(result.code, { default: tErrors("DEFAULT") }));
    return;
  }

  form.reset();
};

const PasswordHandlers = ({
  form,
  onNext,
  tErrors,
}: PasswordHandlersProps): PasswordHandlersReturn => {
  return {
    handleSubmit: (data) =>
      handleSubmit({
        data,
        form,
        onNext,
        tErrors,
      }),
  };
};

export { PasswordHandlers };

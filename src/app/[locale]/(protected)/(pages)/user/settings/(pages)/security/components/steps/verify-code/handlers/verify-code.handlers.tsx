// Vendors
import { toast } from "sonner";
// Types
import type {
  VerifyCodeHandlersProps,
  VerifyCodeHandlersReturn,
  SubmitHandler,
} from "./types/verify-code.handlers.types";

const submitHandler: SubmitHandler = async ({
  data,
  form,
  onNext,
  tErrors,
}) => {
  const result = await onNext(data);

  if (result.code === "INVALID_CODE") {
    form.setError("code", {
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

const VerifyCodeHandlers = ({
  form,
  onNext,
  tErrors,
}: VerifyCodeHandlersProps): VerifyCodeHandlersReturn => {
  return {
    handleSubmit: (data) =>
      submitHandler({
        data,
        form,
        onNext,
        tErrors,
      }),
  };
};

export { VerifyCodeHandlers };

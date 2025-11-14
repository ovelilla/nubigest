// Vendors
import { toast } from "sonner";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type { SignInSchema } from "../schemas/types/two-factor.schema.types";
import type {
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
} from "./types/two-factor.handlers.types";

const submitHandler = async ({
  form,
  setLoading,
  tAuth,
  tTwoFactor,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);
};

const SignInHandlers = ({
  form,
  setLoading,
  tAuth,
  tTwoFactor,
}: SignInHandlersProps): SignInHandlersReturn => {
  return {
    handleSubmit: (values: SignInSchema) =>
      submitHandler({
        form,
        setLoading,
        tAuth,
        tTwoFactor,
        values,
      }),
  };
};

export { SignInHandlers };

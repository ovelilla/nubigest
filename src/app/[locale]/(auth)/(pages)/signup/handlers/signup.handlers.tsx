// Vendors
import { toast } from "sonner";
// Actions
import { signUpAction } from "../actions/signup.actions";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
// import { DEFAULT_SIGNIN_REDIRECT } from "@/constants/middleware.constants";
// Types
import type { SignUpSchema } from "../schemas/types/signup.schema.types";
import type {
  OAuthClickHandlerProps,
  SignUpHandlersProps,
  SignUpHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/signup.handlers.types";

const oautClickHandler = async ({
  setLoading,
  provider,
  t,
}: OAuthClickHandlerProps): Promise<void> => {
  setLoading({ provider, status: true });
  try {
    await authClient.signIn.social({
      provider,
      callbackURL: "/dashboard",
    });
  } catch (error) {
    console.error("Error in oautClickHandler", error);
    toast.error(t("handlers.oauth.error.generic"));
  } finally {
    setLoading({ provider, status: false });
  }
};

const submitHandler = async ({
  form,
  setLoading,
  t,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading({ provider: "credentials", status: true });
  try {
    const result = await signUpAction({ values });
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
    console.error("Error in submitHandler", error);
    toast.error(t("handlers.submit.error.generic"));
  } finally {
    setLoading({ provider: "credentials", status: false });
  }
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const SignUpHandlers = ({
  form,
  setShowPassword,
  setLoading,
  showPassword,
  t,
}: SignUpHandlersProps): SignUpHandlersReturn => {
  return {
    handleOAuthClick: (provider: string) =>
      oautClickHandler({ setLoading, provider, t }),
    handleSubmit: (values: SignUpSchema) =>
      submitHandler({
        form,
        setLoading,
        t,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { SignUpHandlers };

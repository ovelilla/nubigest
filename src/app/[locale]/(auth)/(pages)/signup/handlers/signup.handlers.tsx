// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
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
  tAuth,
  tSignUp,
}: OAuthClickHandlerProps): Promise<void> => {
  setLoading({ provider, status: true });

  const { error } = await authClient.signIn.social({
    provider,
    callbackURL: DEFAULT_REDIRECT,
  });

  setLoading({ provider, status: false });

  if (error) {
    const key = `error.${error.code ?? ""}`;
    const message = tAuth.has(key)
      ? tAuth(key)
      : tSignUp("handlers.oauthClick.error.generic");
    toast.error(message);
    return;
  }
};

const submitHandler = async ({
  form,
  setLoading,
  tAuth,
  tSignUp,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading({ provider: "credentials", status: true });
  const { error } = await authClient.signUp.email({
    name: values.name,
    email: values.email,
    password: values.password,
    callbackURL: DEFAULT_REDIRECT,
  });

  setLoading({ provider: "credentials", status: false });

  if (error) {
    const key = `error.${error.code ?? ""}`;
    const message = tAuth.has(key)
      ? tAuth(key)
      : tSignUp("handlers.submit.error.generic");
    toast.error(message);
    form.setValue("password", "");
    return;
  }

  toast.success(tSignUp("handlers.submit.success"));
  form.reset();
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
  tAuth,
  tSignUp,
}: SignUpHandlersProps): SignUpHandlersReturn => {
  return {
    handleOAuthClick: (provider: string) =>
      oautClickHandler({ setLoading, provider, tAuth, tSignUp }),
    handleSubmit: (values: SignUpSchema) =>
      submitHandler({
        form,
        setLoading,
        tAuth,
        tSignUp,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { SignUpHandlers };

// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type { SignInSchema } from "../schemas/types/signin.schema.types";
import type {
  OAuthClickHandlerProps,
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/signin.handlers.types";

const oautClickHandler = async ({
  provider,
  setLoading,
  tAuth,
  tSignIn,
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
      : tSignIn("handlers.oauthClick.error.generic");
    toast.error(message);
    return;
  }
};

const submitHandler = async ({
  form,
  setLoading,
  tAuth,
  tSignIn,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading({ provider: "credentials", status: true });
  const { error } = await authClient.signIn.email(
    {
      email: values.email,
      password: values.password,
      callbackURL: DEFAULT_REDIRECT,
    },
    {
      onSuccess(context) {
        if (context.data?.twoFactorRedirect) {
          console.log("Redirecting to two-factor authentication...");
          return;
        }
      },
    },
  );
  setLoading({ provider: "credentials", status: false });

  if (error) {
    const key = `error.${error.code ?? ""}`;
    const message = tAuth.has(key)
      ? tAuth(key)
      : tSignIn("handlers.submit.error.generic");
    toast.error(message);
    form.setValue("password", "");
    return;
  }
  toast.success(tSignIn("handlers.submit.success"));
  form.reset();
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const SignInHandlers = ({
  form,
  setLoading,
  setShowPassword,
  showPassword,
  tAuth,
  tSignIn,
}: SignInHandlersProps): SignInHandlersReturn => {
  return {
    handleOAuthClick: (provider: string) =>
      oautClickHandler({ setLoading, provider, tAuth, tSignIn }),
    handleSubmit: (values: SignInSchema) =>
      submitHandler({
        form,
        setLoading,
        tAuth,
        tSignIn,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { SignInHandlers };

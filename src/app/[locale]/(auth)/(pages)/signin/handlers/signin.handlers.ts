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
  router,
  setLoading,
  tAuth,
  tSignIn,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading({ provider: "credentials", status: true });
  const { error: signInError } = await authClient.signIn.email(
    {
      email: values.email,
      password: values.password,
      callbackURL: DEFAULT_REDIRECT,
    },
    {
      async onSuccess(context) {
        if (context.data.twoFactorRedirect) {
          const { error: otpError } = await authClient.twoFactor.sendOtp();

          if (otpError) {
            const key = `error.${otpError.code ?? ""}`;
            const message = tAuth.has(key)
              ? tAuth(key)
              : tSignIn("handlers.submit.error.generic");
            toast.error(message);

            form.setValue("password", "");
            setLoading({ provider: "credentials", status: false });
            return;
          }

          router.push("/2fa");
          setLoading({ provider: "credentials", status: false });
          return;
        }
      },
    },
  );

  if (signInError) {
    const key = `error.${signInError.code ?? ""}`;
    const message = tAuth.has(key)
      ? tAuth(key)
      : tSignIn("handlers.submit.error.generic");
    toast.error(message);

    form.setValue("password", "");
    setLoading({ provider: "credentials", status: false });
    return;
  }

  toast.success(tSignIn("handlers.submit.success"));
  form.reset();
  setLoading({ provider: "credentials", status: false });
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const SignInHandlers = ({
  form,
  router,
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
        router,
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

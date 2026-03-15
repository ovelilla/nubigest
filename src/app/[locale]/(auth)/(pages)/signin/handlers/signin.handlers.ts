// Vendors
import { toast } from "sonner";
// Actions
import { setPendingVerificationCookie } from "../actions/set-pending-verification-cookie/set-pending-verification-cookie.action";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type {
  OAuthClickHandlerProps,
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
} from "./types/signin.handlers.types";

const oautClickHandler = async ({
  provider,
  setLoading,
  tRoot,
  tSignIn,
}: OAuthClickHandlerProps): Promise<void> => {
  try {
    setLoading({ provider, status: true });

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: DEFAULT_REDIRECT,
    });

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      const message = tRoot.has(key)
        ? tRoot(key)
        : tSignIn("handlers.oauth.error.generic");
      toast.error(message);
      return;
    }
  } catch (error) {
    console.error(error);
    toast.error(tSignIn("handlers.oauth.error.generic"));
  } finally {
    setLoading({ provider, status: false });
  }
};

const submitHandler = async ({
  form,
  router,
  setLoading,
  tRoot,
  tSignIn,
  values,
}: SubmitHandlerProps): Promise<void> => {
  try {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
      },
      {
        onRequest: () => {
          setLoading({ provider: "credentials", status: true });
        },
        onResponse: () => {
          setLoading({ provider: "credentials", status: false });
        },
        onSuccess: async (context) => {
          form.reset();
          if (context.data.twoFactorRedirect) {
            router.push("/two-factor");
            return;
          }
          toast.success(tSignIn("handlers.submit.success"));
          router.push(DEFAULT_REDIRECT);
        },
        onError: async (context) => {
          if (context.error.status === 403) {
            await setPendingVerificationCookie(values.email);
            router.push("/verify");
            return;
          }
          if (context.error.status === 429) {
            toast.error(tSignIn("handlers.submit.error.tooManyRequests"));
            return;
          }
          const key = `errors.${context.error.code}`;
          const message = tRoot.has(key)
            ? tRoot(key)
            : tSignIn("handlers.submit.error.generic");
          toast.error(message);
          form.setValue("password", "");
        },
      },
    );
  } catch (error) {
    console.error(error);
    toast.error(tSignIn("handlers.submit.error.generic"));
  }
};

const SignInHandlers = ({
  form,
  router,
  setLoading,
  tRoot,
  tSignIn,
}: SignInHandlersProps): SignInHandlersReturn => {
  return {
    handleOAuthClick: (provider) =>
      oautClickHandler({ setLoading, provider, tRoot, tSignIn }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        router,
        setLoading,
        tRoot,
        tSignIn,
        values,
      }),
  };
};

export { SignInHandlers };

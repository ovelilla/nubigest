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
  HandleOAuthClick,
  HandlePasskeyClick,
  HandleSubmit,
  SignInHandlersProps,
  SignInHandlersReturn,
} from "./types/signin.handlers.types";

const handleOAuthClick: HandleOAuthClick = async ({
  provider,
  setLoading,
  tErrors,
  tSignIn,
}) => {
  try {
    await authClient.signIn.social({
      provider,
      callbackURL: DEFAULT_REDIRECT,
      fetchOptions: {
        onRequest: () => {
          setLoading({ provider, status: true });
        },
        onResponse: () => {
          setLoading({ provider, status: false });
        },
        onError: (context) => {
          if (context.error.code && tErrors.has(context.error.code)) {
            toast.error(tErrors(context.error.code));
            return;
          }
          toast.error(tSignIn("handlers.oauth.error.generic"));
        },
      },
    });
  } catch (error) {
    console.error(error);
    toast.error(tSignIn("handlers.oauth.error.generic"));
  }
};

const handlePasskeyClick: HandlePasskeyClick = async ({
  router,
  setLoading,
  tSignIn,
}) => {
  try {
    await authClient.signIn.passkey({
      autoFill: false,
      fetchOptions: {
        onRequest: () => {
          setLoading({ provider: "passkey", status: true });
        },
        onResponse: () => {
          setLoading({ provider: "passkey", status: false });
        },
        onSuccess: () => {
          toast.success(tSignIn("handlers.passkey.success"));
          router.push(DEFAULT_REDIRECT);
        },
        onError: () => {
          toast.error(tSignIn("handlers.passkey.error.generic"));
        },
      },
    });
  } catch (error) {
    console.error(error);
    toast.error(tSignIn("handlers.passkey.error.generic"));
  }
};

const handleSubmit: HandleSubmit = async ({
  form,
  router,
  setLoading,
  tErrors,
  tSignIn,
  values,
}) => {
  try {
    await authClient.signIn.email({
      email: values.email,
      password: values.password,
      rememberMe: values.rememberMe,
      fetchOptions: {
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
          form.setValue("password", "");
          if (context.error.code && tErrors.has(context.error.code)) {
            toast.error(tErrors(context.error.code));
            return;
          }
          toast.error(tSignIn("handlers.submit.error.generic"));
        },
      },
    });
  } catch (error) {
    console.error(error);
    toast.error(tSignIn("handlers.submit.error.generic"));
  }
};

const SignInHandlers = ({
  form,
  router,
  setLoading,
  tErrors,
  tSignIn,
}: SignInHandlersProps): SignInHandlersReturn => {
  return {
    handleOAuthClick: (provider) =>
      handleOAuthClick({ setLoading, provider, tErrors, tSignIn }),
    handlePasskeyClick: () =>
      handlePasskeyClick({ router, setLoading, tSignIn }),
    handleSubmit: (values) =>
      handleSubmit({
        form,
        router,
        setLoading,
        tErrors,
        tSignIn,
        values,
      }),
  };
};

export { SignInHandlers };

// Vendors
import { toast } from "sonner";
// Actions
import { setPendingVerificationCookie } from "../actions/set-pending-verification-cookie/set-pending-verification-cookie.action";
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
} from "./types/signin.handlers.types";

const oautClickHandler = async ({
  provider,
  setLoading,
  tAuth,
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
      const message = tAuth.has(key)
        ? tAuth(key)
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
  tAuth,
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
          if (context.error.code === "EMAIL_NOT_VERIFIED") {
            await setPendingVerificationCookie(values.email);
            router.push("/verify");
            return;
          }

          const key = `errors.${context.error.code}`;
          const message = tAuth.has(key)
            ? tAuth(key)
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
  };
};

export { SignInHandlers };

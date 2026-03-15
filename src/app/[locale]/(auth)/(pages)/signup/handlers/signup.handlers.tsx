// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type {
  OAuthClickHandlerProps,
  SignUpHandlersProps,
  SignUpHandlersReturn,
  SubmitHandlerProps,
} from "./types/signup.handlers.types";

const oauthClickHandler = async ({
  setLoading,
  provider,
  tRoot,
  tSignUp,
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
        : tSignUp("handlers.oauth.error.generic");
      toast.error(message);
      return;
    }
  } catch (error) {
    console.error(error);
    toast.error(tSignUp("handlers.oauth.error.generic"));
  } finally {
    setLoading({ provider, status: false });
  }
};

const submitHandler = async ({
  form,
  setLoading,
  tRoot,
  tSignUp,
  values,
}: SubmitHandlerProps): Promise<void> => {
  try {
    await authClient.signUp.email(
      {
        name: values.name,
        email: values.email,
        password: values.password,
        callbackURL: DEFAULT_REDIRECT,
      },
      {
        onRequest: () => {
          setLoading({ provider: "credentials", status: true });
        },
        onResponse: () => {
          setLoading({ provider: "credentials", status: false });
        },
        onSuccess: async () => {
          toast.success(tSignUp("handlers.submit.success"));
          form.reset();
        },
        onError: async (context) => {
          const key = `errors.${context.error.code ?? ""}`;
          const message = tRoot.has(key)
            ? tRoot(key)
            : tSignUp("handlers.submit.error.generic");
          toast.error(message);
          form.setValue("password", "");
        },
      },
    );
  } catch (error) {
    console.error(error);
    toast.error(tSignUp("handlers.submit.error.generic"));
  }
};

const SignUpHandlers = ({
  form,
  setLoading,
  tRoot,
  tSignUp,
}: SignUpHandlersProps): SignUpHandlersReturn => {
  return {
    handleOAuthClick: (provider) =>
      oauthClickHandler({ setLoading, provider, tRoot, tSignUp }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        setLoading,
        tRoot,
        tSignUp,
        values,
      }),
  };
};

export { SignUpHandlers };

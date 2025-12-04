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

const oauthClickHandler = async ({
  setLoading,
  provider,
  tAuth,
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
      const message = tAuth.has(key)
        ? tAuth(key)
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
  tAuth,
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
          const message = tAuth.has(key)
            ? tAuth(key)
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
      oauthClickHandler({ setLoading, provider, tAuth, tSignUp }),
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

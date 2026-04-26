// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type {
  HandleOAuthClickProps,
  SignUpHandlersProps,
  SignUpHandlersReturn,
  HandleSubmitProps,
} from "./types/signup.handlers.types";

const handleOAuthClick = async ({
  setLoading,
  provider,
  tErrors,
  tSignUp,
}: HandleOAuthClickProps): Promise<void> => {
  try {
    setLoading({ provider, status: true });

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: DEFAULT_REDIRECT,
    });

    if (error) {
      if (error.code && tErrors.has(error.code)) {
        toast.error(tErrors(error.code));
        return;
      }
      toast.error(tSignUp("handlers.oauth.error.generic"));
      return;
    }
  } catch (error) {
    console.error(error);
    toast.error(tSignUp("handlers.oauth.error.generic"));
  } finally {
    setLoading({ provider, status: false });
  }
};

const handleSubmit = async ({
  form,
  setLoading,
  tErrors,
  tSignUp,
  values,
}: HandleSubmitProps): Promise<void> => {
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
          form.setValue("password", "");
          if (context.error.code && tErrors.has(context.error.code)) {
            toast.error(tErrors(context.error.code));
            return;
          }
          toast.error(tSignUp("handlers.submit.error.generic"));
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
  tErrors,
  tSignUp,
}: SignUpHandlersProps): SignUpHandlersReturn => {
  return {
    handleOAuthClick: (provider) =>
      handleOAuthClick({ setLoading, provider, tErrors, tSignUp }),
    handleSubmit: (values) =>
      handleSubmit({
        form,
        setLoading,
        tErrors,
        tSignUp,
        values,
      }),
  };
};

export { SignUpHandlers };

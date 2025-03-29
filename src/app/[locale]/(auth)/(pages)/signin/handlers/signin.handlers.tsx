// Vendors
import { signIn } from "next-auth/react";
import { toast } from "sonner";
// Actions
import { signInAction } from "../actions/signin.action";
// Constants
import { DEFAULT_SIGNIN_REDIRECT } from "@/constants/middleware.constants";
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
  t,
}: OAuthClickHandlerProps): Promise<void> => {
  setLoading({ provider, status: true });

  try {
    await signIn(provider, {
      callbackUrl: DEFAULT_SIGNIN_REDIRECT,
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
  router,
  setLoading,
  setShowTwoFactor,
  t,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading({ provider: "credentials", status: true });

  try {
    const { error, success, twoFactor } =
      (await signInAction({ values })) ?? {};

    if (error) {
      toast.error(error);
      form.setValue("password", "");
      return;
    }

    if (success) {
      toast.success(success);
      form.reset();
      return;
    }

    if (twoFactor) {
      setShowTwoFactor(true);
      return;
    }

    router.push(DEFAULT_SIGNIN_REDIRECT);
  } catch (error) {
    console.error("Error in signInAction", error);
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

const SignInHandlers = ({
  form,
  router,
  setLoading,
  setShowPassword,
  setShowTwoFactor,
  showPassword,
  t,
}: SignInHandlersProps): SignInHandlersReturn => {
  return {
    handleOAuthClick: (provider: string) =>
      oautClickHandler({ setLoading, provider, t }),
    handleSubmit: (values: SignInSchema) =>
      submitHandler({
        form,
        router,
        setLoading,
        setShowTwoFactor,
        t,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { SignInHandlers };

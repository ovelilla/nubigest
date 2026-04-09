// Vendors
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
import { DEFAULT_VALUES } from "../constants/signin.constants";
// Handlers
import { SignInHandlers } from "../handlers/signin.handlers";
// i18n
import { useRouter } from "@/i18n/navigation";
// Schemas
import { getSignInSchema } from "../schemas/signin.schema";
// Types
import type { SignInSchema } from "../schemas/types/signin.schema.types";
import type { LoadingState } from "./types/use-signin.hook.types";

const useSignIn = () => {
  const [loading, setLoading] = useState<LoadingState>({
    provider: "",
    status: false,
  });

  const tSignIn = useTranslations("signin");
  const tErrors = useTranslations("root.errors");

  const router = useRouter();

  const signInSchema = getSignInSchema(tSignIn);

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (
      !PublicKeyCredential.isConditionalMediationAvailable ||
      !PublicKeyCredential.isConditionalMediationAvailable()
    ) {
      return;
    }
    void authClient.signIn.passkey({
      autoFill: true,
      fetchOptions: {
        onRequest: () => {
          setLoading({ provider: "passkey", status: true });
        },
        onResponse: () => {
          setLoading({ provider: "passkey", status: false });
        },
        onSuccess: () => {
          toast.success(tSignIn("handlers.submit.success"));
          router.push(DEFAULT_REDIRECT);
        },
        onError: () => {
          toast.error(tSignIn("handlers.submit.error.generic"));
        },
      },
    });
  }, [router, tSignIn]);

  const { handleOAuthClick, handlePasskeyClick, handleSubmit } = SignInHandlers(
    {
      form,
      router,
      setLoading,
      tErrors,
      tSignIn,
    },
  );

  return {
    form,
    handleOAuthClick,
    handlePasskeyClick,
    handleSubmit,
    loading,
    t: tSignIn,
  };
};

export { useSignIn };

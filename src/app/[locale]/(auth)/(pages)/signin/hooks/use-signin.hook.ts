// Vendors
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
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
    const preloadPasskey = async () => {
      if (typeof window === "undefined") return;
      if (!("PublicKeyCredential" in window)) return;

      const PublicKeyCredentialWithConditional =
        PublicKeyCredential as typeof PublicKeyCredential & {
          isConditionalMediationAvailable?: () => Promise<boolean>;
        };

      if (!PublicKeyCredentialWithConditional.isConditionalMediationAvailable) {
        return;
      }

      const available =
        await PublicKeyCredentialWithConditional.isConditionalMediationAvailable();

      if (!available) {
        return;
      }

      await authClient.signIn.passkey({
        autoFill: true,
      });
    };

    void preloadPasskey();
  }, []);

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

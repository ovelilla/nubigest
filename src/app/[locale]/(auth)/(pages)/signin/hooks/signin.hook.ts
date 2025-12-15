// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
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
import type { LoadingState } from "./types/signin.hook.types";

const SignInHook = () => {
  const [loading, setLoading] = useState<LoadingState>({
    provider: "",
    status: false,
  });

  const tSignIn = useTranslations("signin");
  const tAuth = useTranslations("auth");

  const router = useRouter();

  const signInSchema = getSignInSchema(tSignIn);

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleOAuthClick, handleSubmit } = SignInHandlers({
    form,
    router,
    setLoading,
    tAuth,
    tSignIn,
  });

  return {
    form,
    handleOAuthClick,
    handleSubmit,
    loading,
    t: tSignIn,
  };
};

export { SignInHook };

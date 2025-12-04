// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/signin.constants";
// Handlers
import { SignInHandlers } from "../handlers/signin.handlers";
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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const reset = searchParams.get("reset");

  const tSignIn = useTranslations("signin");
  const tAuth = useTranslations("auth");

  const router = useRouter();

  const signInSchema = getSignInSchema(tSignIn);

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleOAuthClick, handleSubmit, handleToggleShowPassword } =
    SignInHandlers({
      form,
      router,
      setLoading,
      setShowPassword,
      showPassword,
      tAuth,
      tSignIn,
    });

  return {
    form,
    handleOAuthClick,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    reset,
    showPassword,
    t: tSignIn,
  };
};

export { SignInHook };

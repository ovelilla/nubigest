// Vendors
import { useForm } from "react-hook-form";
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

  const tSignIn = useTranslations("signin");
  const tAuth = useTranslations("auth");

  const signInSchema = getSignInSchema(tSignIn);

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleOAuthClick, handleSubmit, handleToggleShowPassword } =
    SignInHandlers({
      form,
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
    showPassword,
    t: tSignIn,
  };
};

export { SignInHook };

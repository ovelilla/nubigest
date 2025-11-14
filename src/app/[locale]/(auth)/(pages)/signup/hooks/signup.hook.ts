// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/signup.constants";
// Handlers
import { SignUpHandlers } from "../handlers/signup.handlers";
// Schemas
import { getSignUpSchema } from "../schemas/signup.schema";
// Types
import type { SignUpSchema } from "../schemas/types/signup.schema.types";
import type { LoadingState } from "./types/signup.hook.types";

const SignUpHook = () => {
  const [loading, setLoading] = useState<LoadingState>({
    provider: "",
    status: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const tSignUp = useTranslations("signup");
  const tAuth = useTranslations("auth");

  const signUpSchema = getSignUpSchema(tSignUp);

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleOAuthClick, handleSubmit, handleToggleShowPassword } =
    SignUpHandlers({
      form,
      setLoading,
      setShowPassword,
      showPassword,
      tAuth,
      tSignUp,
    });

  return {
    form,
    handleOAuthClick,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    t: tSignUp,
  };
};

export { SignUpHook };

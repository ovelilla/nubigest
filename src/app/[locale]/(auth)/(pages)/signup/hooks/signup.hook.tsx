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
import type { LoadingState, SignUpHookReturn } from "./types/signup.hook.types";

const SignUpHook = (): SignUpHookReturn => {
  const [loading, setLoading] = useState<LoadingState>({
    provider: "",
    status: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const t = useTranslations("signup");

  const signUpSchema = getSignUpSchema(t);

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
      t,
    });

  return {
    form,
    handleOAuthClick,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    t,
  };
};

export { SignUpHook };

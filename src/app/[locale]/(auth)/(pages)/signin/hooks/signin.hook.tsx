// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
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
import type { LoadingState, SignInHookReturn } from "./types/signin.hook.types";

const SignInHook = (): SignInHookReturn => {
  const [loading, setLoading] = useState<LoadingState>({
    provider: "",
    status: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);

  const t = useTranslations("signin");

  const signInSchema = getSignInSchema(t);

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const router = useRouter();

  const { handleOAuthClick, handleSubmit, handleToggleShowPassword } =
    SignInHandlers({
      form,
      router,
      setLoading,
      setShowPassword,
      setShowTwoFactor,
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
    showTwoFactor,
    t,
  };
};

export { SignInHook };

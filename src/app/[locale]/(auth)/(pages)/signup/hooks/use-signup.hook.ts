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

const useSignUp = () => {
  const [loading, setLoading] = useState<LoadingState>({
    provider: "",
    status: false,
  });

  const tSignUp = useTranslations("signup");
  const tErrors = useTranslations("root.errors");

  const signUpSchema = getSignUpSchema(tSignUp);

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleOAuthClick, handleSubmit } = SignUpHandlers({
    form,
    setLoading,
    tErrors,
    tSignUp,
  });

  return {
    form,
    handleOAuthClick,
    handleSubmit,
    loading,
    t: tSignUp,
  };
};

export { useSignUp };

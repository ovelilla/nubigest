"use client";
// Vendors
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
// Constants
import { DEFAULT_VALUES } from "../constants/password.constants";
// Handlers
import { PasswordHandlers } from "../handlers/password.handlers";
// Schemas
import { getPasswordSchema } from "../schemas/password.schema";
// Types
import type { UsePasswordProps } from "./types/password.hook.types";
import type { PasswordSchema } from "../schemas/types/password.schema.types";

const usePassword = ({ onNext }: UsePasswordProps) => {
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.steps.password",
  );
  const tErrors = useTranslations("root.errors");

  const passwordStepSchema = getPasswordSchema(t);

  const form = useForm<PasswordSchema>({
    resolver: zodResolver(passwordStepSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit } = PasswordHandlers({
    form,
    onNext,
    tErrors,
  });

  return {
    form,
    handleSubmit,
    t,
  };
};

export { usePassword };

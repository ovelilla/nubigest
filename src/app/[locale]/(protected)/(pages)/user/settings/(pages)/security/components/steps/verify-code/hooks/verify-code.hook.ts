// Vendors
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/verify-code.constants";
// Handlers
import { VerifyCodeHandlers } from "../handlers/verify-code.handlers";
// Schemas
import { getTotpSchema } from "../schemas/verify-code.schema";
// Types
import type { TotpSchema } from "../schemas/types/verify-code.schema.types";
import type { VerifyCodeHookProps } from "./types/verify-code.hook.types";

const VerifyCodeHook = ({ onNext }: VerifyCodeHookProps) => {
  const t = useTranslations("securitySettings.components.steps.verifyCode");
  const tErrors = useTranslations("root.errors");

  const totpSchema = getTotpSchema(t);

  const form = useForm<TotpSchema>({
    resolver: zodResolver(totpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit } = VerifyCodeHandlers({
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

export { VerifyCodeHook };

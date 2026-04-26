// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Handlers
import { VerifyHandlers } from "../handlers/verify.handlers";
// Hooks
import { useCooldown } from "@/hooks/use-coldown";
// Types
import { UseVerifyProps } from "./types/verify.hook.types";

const useVerify = ({ email }: UseVerifyProps) => {
  const [loading, setLoading] = useState(false);

  const tVerify = useTranslations("verify");
  const tErrors = useTranslations("root.errors");

  const { cooldown, start: startCooldown } = useCooldown();

  const { handleResend } = VerifyHandlers({
    email,
    setLoading,
    startCooldown,
    tErrors,
    tVerify,
  });

  return {
    cooldown,
    email,
    handleResend,
    loading,
    t: tVerify,
  };
};

export { useVerify };

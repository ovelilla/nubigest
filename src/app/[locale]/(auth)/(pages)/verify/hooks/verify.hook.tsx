// Vendors
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
// Handlers
import { VerifyHandlers } from "../handlers/verify.handlers";
// Hooks
import { useCooldown } from "@/hooks/use-coldown";
// Types
import { VerifyHookProps } from "./types/verify.hook.types";

const VerifyHook = ({ email }: VerifyHookProps) => {
  const [loading, setLoading] = useState(false);

  const tVerify = useTranslations("verify");
  const tAuth = useTranslations("auth");

  const { cooldown, start: startCooldown } = useCooldown();

  const { handleResend } = VerifyHandlers({
    email,
    setLoading,
    startCooldown,
    tAuth,
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

export { VerifyHook };

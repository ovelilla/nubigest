// Vendors
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
// i18n
import { useRouter } from "@/i18n/navigation";
// Handlers
import { VerifyHandlers } from "../handlers/verify.handlers";

const VerifyHook = () => {
  const [cooldown, setCooldown] = useState(0);
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const tVerify = useTranslations("verify");
  const tAuth = useTranslations("auth");

  const { handleResend } = VerifyHandlers({
    email,
    setCooldown,
    setLoading,
    tAuth,
    tVerify,
  });

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("verifyEmail");
    if (!storedEmail) {
      router.push("/signin");
      return;
    }
    setEmail(storedEmail);
    sessionStorage.removeItem("verifyEmail");
  }, [router]);

  useEffect(() => {
    if (cooldown === 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  return {
    cooldown,
    email,
    handleResend,
    loading,
    t: tVerify,
  };
};

export { VerifyHook };

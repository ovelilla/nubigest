// Vendors
import { useTranslations } from "next-intl";
// Libs
import { authClient } from "@/lib/auth-client";

const useSecurityStatus = () => {
  const t = useTranslations("securitySettings.components.securityStatus");

  const { data: sessionData, isPending: isPendingSession } =
    authClient.useSession();

  const isTwoFactorEnabled = sessionData?.user.twoFactorEnabled === true;

  return {
    isPendingSession,
    isTwoFactorEnabled,
    t,
  };
};

export { useSecurityStatus };

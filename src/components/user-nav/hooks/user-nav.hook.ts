// Vendors
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
// Handlers
import { UserNavHandlers } from "../handlers/user-nav.handlers";

const UserNavHook = () => {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const router = useRouter();
  const t = useTranslations("protected.layouts.dashboard.components.userNav");

  const { handleSignOut } = UserNavHandlers({
    router,
    setIsSigningOut,
  });

  return {
    handleSignOut,
    isSigningOut,
    t,
  };
};

export { UserNavHook };

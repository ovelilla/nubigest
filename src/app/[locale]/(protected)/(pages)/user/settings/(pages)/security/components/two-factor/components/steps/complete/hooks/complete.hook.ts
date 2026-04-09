// Vendors
import { useTranslations } from "next-intl";

const CompleteHook = () => {
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.steps.complete",
  );

  return {
    t,
  };
};

export { CompleteHook };

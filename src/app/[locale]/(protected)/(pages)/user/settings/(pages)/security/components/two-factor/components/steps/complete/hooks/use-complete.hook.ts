// Vendors
import { useTranslations } from "next-intl";

const useComplete = () => {
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.steps.complete",
  );

  return {
    t,
  };
};

export { useComplete };

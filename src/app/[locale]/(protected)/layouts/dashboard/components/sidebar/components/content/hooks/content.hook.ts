// Vendors
import { useTranslations } from "next-intl";
// i18n
import { usePathname } from "@/i18n/navigation";

const ContentHook = () => {
  const pathname = usePathname();

  const t = useTranslations(
    "protected.layouts.dashboard.components.sidebar.components.content.components.navigation",
  );

  return {
    pathname,
    t,
  };
};

export { ContentHook };

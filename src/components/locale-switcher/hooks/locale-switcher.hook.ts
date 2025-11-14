// Vendors
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
// Handlers
import { LocaleSwitcherHandlers } from "../handlers/locale-switcher.handlers";
// i18n
import { usePathname, useRouter } from "@/i18n/navigation";

const LocaleSwitcherHook = () => {
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("components.localeSwitcher");

  const { handleSwitchLocale } = LocaleSwitcherHandlers({
    params,
    pathname,
    router,
    startTransition,
  });

  return {
    handleSwitchLocale,
    isPending,
    locale,
    t,
  };
};

export { LocaleSwitcherHook };

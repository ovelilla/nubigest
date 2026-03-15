"use client";
// Vendors
import { useTranslations } from "next-intl";
// Components
import { ResponsiveNav } from "@/components/responsive-nav/responsive-nav.component";
// Constants
import { ITEMS } from "../../constants/settings.constants";
// i18n
import { usePathname } from "@/i18n/navigation";

const SettingsNav = () => {
  const pathname = usePathname();
  const t = useTranslations("settings.components.settingsNav");

  const items = ITEMS.map((item) => ({
    id: item.key,
    label: t(item.key),
    href: item.href,
  }));

  const activeItem = items.find(({ href }) => href === pathname)!;

  return <ResponsiveNav items={items} activeItem={activeItem} />;
};

export { SettingsNav };

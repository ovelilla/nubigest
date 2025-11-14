// Icons
import { Home } from "lucide-react";
// Types
import type { NavigationGroup } from "../types/content.component.types";

const getNavigation = (t: (key: string) => string): NavigationGroup[] => [
  {
    label: t("global.groups.main.label"),
    items: [
      {
        title: t("global.groups.main.items.home"),
        href: { pathname: "/dashboard" },
        icon: Home,
      },
    ],
  },
];

export { getNavigation };

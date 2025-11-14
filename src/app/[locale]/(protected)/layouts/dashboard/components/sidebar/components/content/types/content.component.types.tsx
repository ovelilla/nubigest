// Types
import type { LucideIcon } from "lucide-react";
import type { routing } from "@/i18n/routing";

type AppRoutes = keyof typeof routing.pathnames;

type Href = { pathname: AppRoutes };

type Item = {
  title: string;
  href: Href;
  icon?: LucideIcon;
  items?: {
    title: string;
    href: Href;
  }[];
};

type NavigationGroup = {
  label: string;
  items: Item[];
};

export type { NavigationGroup };

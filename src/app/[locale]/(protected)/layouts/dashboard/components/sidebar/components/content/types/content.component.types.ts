// Types
import type { LucideIcon } from "lucide-react";
import type { Pathnames } from "@/i18n/types/i18n.types";

type Href = { pathname: Pathnames };

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

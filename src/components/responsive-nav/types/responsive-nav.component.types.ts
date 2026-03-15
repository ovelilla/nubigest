// i18n
import { Link } from "@/i18n/navigation";
// Types
import type { ComponentProps } from "react";

type Item = {
  id: string;
  label: string;
  href: ComponentProps<typeof Link>["href"];
};

type ResponsiveNavProps = {
  items: Array<Item>;
  activeItem: Item;
};

export type { Item, ResponsiveNavProps };

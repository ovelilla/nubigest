// Types
import type { LucideIcon } from "lucide-react";
import type { Session } from "next-auth";

type ContentProps = {
  session: Session;
};

type StaticPathname =
  | "/dashboard/global"
  | "/dashboard/global/events"
  | "/dashboard/global/organizations"
  | "/dashboard/global/users";

type DynamicPathname =
  | "/dashboard/[slug]"
  | "/dashboard/[slug]/appointments"
  | "/dashboard/[slug]/clients"
  | "/dashboard/[slug]/services";

type Href =
  | { pathname: StaticPathname }
  | { pathname: DynamicPathname; params: { slug: string } };

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

export type { ContentProps, NavigationGroup };

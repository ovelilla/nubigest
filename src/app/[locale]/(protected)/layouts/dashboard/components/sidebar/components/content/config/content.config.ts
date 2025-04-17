// Icons
import { Building2, Calendar, Home, Users } from "lucide-react";
// Types
import type { NavigationGroup } from "../types/content.component.types";

const getGlobalNavigation = (t: (key: string) => string): NavigationGroup[] => [
  {
    label: t("global.groups.main.label"),
    items: [
      {
        title: t("global.groups.main.items.home"),
        href: { pathname: "/dashboard/global" },
        icon: Home,
      },
      {
        title: t("global.groups.main.items.events"),
        href: { pathname: "/dashboard/global/events" },
        icon: Calendar,
      },
      {
        title: t("global.groups.main.items.organizations"),
        href: { pathname: "/dashboard/global/organizations" },
        icon: Building2,
      },
      {
        title: t("global.groups.main.items.users"),
        href: { pathname: "/dashboard/global/users" },
        icon: Users,
      },
    ],
  },
];

const getOrganizationNavigation = (
  t: (key: string) => string,
  slug: string,
): NavigationGroup[] => [
  {
    label: t("organization.groups.main.label"),
    items: [
      {
        title: t("organization.groups.main.items.home"),
        href: { pathname: "/dashboard/[slug]", params: { slug } },
        icon: Home,
      },
      {
        title: t("organization.groups.main.items.appointments"),
        href: { pathname: "/dashboard/[slug]/appointments", params: { slug } },
        icon: Calendar,
      },
      {
        title: t("organization.groups.main.items.clients"),
        href: { pathname: "/dashboard/[slug]/clients", params: { slug } },
        icon: Users,
      },
      {
        title: t("organization.groups.main.items.services"),
        href: { pathname: "/dashboard/[slug]/services", params: { slug } },
        icon: Users,
      },
    ],
  },
];

export { getGlobalNavigation, getOrganizationNavigation };

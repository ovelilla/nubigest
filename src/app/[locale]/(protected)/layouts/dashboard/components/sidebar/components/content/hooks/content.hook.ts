// Vendors
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
// i18n
import { usePathname } from "@/i18n/navigation";
// Types
import type { ContentHookProps } from "./types/content.hook.types";

const ContentHook = ({ session }: ContentHookProps) => {
  const pathname = usePathname();
  const { slug } = useParams<{ locale: string; slug: string }>();

  const t = useTranslations(
    "protected.layouts.dashboard.components.sidebar.components.content.components.navigation",
  );

  const role = session?.user.role;
  const isAdmin = role === "ADMIN";
  const isGlobal = !slug && isAdmin;

  return {
    isGlobal,
    pathname,
    slug,
    t,
  };
};

export { ContentHook };

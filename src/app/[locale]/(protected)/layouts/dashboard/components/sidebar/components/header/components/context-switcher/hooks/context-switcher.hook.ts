// Vendors
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
// Handlers
import { ContextSwitcherHandlers } from "../handlers/context-switcher.handlers";
// Hooks
import { useSidebar } from "@/components/ui/sidebar";
// Types
import type { ContextSwitcherHookProps } from "./types/context-switcher.hook.types";

const ContextSwitcherHook = ({
  organizations,
  session,
  setOpenDialog,
}: ContextSwitcherHookProps) => {
  const { isMobile } = useSidebar();
  const { slug } = useParams<{ locale: string; slug: string }>();

  const t = useTranslations(
    "protected.layouts.dashboard.components.sidebar.components.header.components.contextSwitcher",
  );

  const role = session?.user.role;

  const isAdmin = role === "ADMIN";
  const isGlobal = !slug && isAdmin;

  const selectedOrganization = organizations.find(
    (organization) => organization.slug === slug,
  );

  const name = isGlobal
    ? t("global")
    : selectedOrganization
      ? selectedOrganization.name
      : t("noOrganization");

  const { handleCreateOrganization } = ContextSwitcherHandlers({
    setOpenDialog,
  });

  return {
    handleCreateOrganization,
    isAdmin,
    isGlobal,
    isMobile,
    name,
    role,
    selectedOrganization,
    t,
  };
};

export { ContextSwitcherHook };

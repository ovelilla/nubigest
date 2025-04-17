// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarMenuButton } from "@/components/ui/sidebar";
// Hooks
import { ContextSwitcherHook } from "./hooks/context-switcher.hook";
// i18n
import { Link } from "@/i18n/navigation";
// Icons
import {
  Building,
  Check,
  ChevronsUpDown,
  CircleAlert,
  Globe,
  Plus,
} from "lucide-react";
// Types
import type { ContextSwitcherProps } from "./types/context-switcher.component.types";

const ContextSwitcher = ({
  organizations,
  session,
  setOpenDialog,
}: ContextSwitcherProps) => {
  const {
    handleCreateOrganization,
    isAdmin,
    isGlobal,
    isMobile,
    name,
    role,
    selectedOrganization,
    t,
  } = ContextSwitcherHook({
    organizations,
    session,
    setOpenDialog,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          size="lg"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            {isGlobal ? (
              <Globe className="size-4" />
            ) : selectedOrganization ? (
              <Building className="size-4" />
            ) : (
              <CircleAlert className="size-4" />
            )}
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{name}</span>
            <span className="truncate text-xs">{t(`roles.${role}`)}</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-48 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        sideOffset={4}
      >
        <ScrollArea className="flex max-h-72 flex-col overflow-y-auto">
          {isAdmin && (
            <DropdownMenuItem asChild className="gap-2 p-2">
              <Link href="/dashboard/global">
                <Globe />

                {t("global")}
                {isGlobal && <Check className="ml-auto" />}
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuLabel className="text-muted-foreground text-xs">
            {t("organizations")}
          </DropdownMenuLabel>
          {organizations.map((organization) => {
            const isCurrent = organization.slug === selectedOrganization?.slug;

            return (
              <DropdownMenuItem
                asChild
                className="gap-2 p-2"
                key={organization.id}
              >
                <Link
                  href={{
                    pathname: "/dashboard/[slug]",
                    params: { slug: organization.slug },
                  }}
                >
                  <Building />
                  {organization.name}
                  {isCurrent && <Check className="ml-auto" />}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleCreateOrganization}
            className="text-muted-foreground gap-2 p-2 font-medium"
          >
            <Plus />
            {t("addOrganization")}
          </DropdownMenuItem>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ContextSwitcher };

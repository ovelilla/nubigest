// Components
import { ContextSwitcher } from "./components/context-switcher/context-switcher.component";
import { CreateOrganization } from "./components/create-organization/create-organization.component";
import { SidebarHeader } from "@/components/ui/sidebar";
// Hooks
import { HeaderHook } from "./hooks/header.hook";
// Types
import type { HeaderProps } from "./types/header.component.types";

const Header = ({ organizations, session }: HeaderProps) => {
  const { openDialog, setOpenDialog } = HeaderHook();

  return (
    <SidebarHeader>
      <ContextSwitcher
        organizations={organizations}
        session={session}
        setOpenDialog={setOpenDialog}
      />
      <CreateOrganization
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </SidebarHeader>
  );
};

export { Header };

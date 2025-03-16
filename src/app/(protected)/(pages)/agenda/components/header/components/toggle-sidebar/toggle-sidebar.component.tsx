// Components
import { Button } from "@/components/ui/button";
// Hooks
import { ToggleSidebarHook } from "./hooks/toggle-sidebar.hook";
// Icons
import { Menu } from "lucide-react";
// Types
import type { ToggleSidebarProps } from "./types/toggle-sidebar.component.types";

const ToggleSidebar = ({ setOpenSidebar }: ToggleSidebarProps) => {
  const { handleToggleSidebarButtonClick } = ToggleSidebarHook({
    setOpenSidebar,
  });

  return (
    <Button
      aria-label="Mostrar/Ocultar barra lateral"
      size="icon"
      variant="ghost"
      onClick={handleToggleSidebarButtonClick}
    >
      <Menu />
    </Button>
  );
};

export { ToggleSidebar };

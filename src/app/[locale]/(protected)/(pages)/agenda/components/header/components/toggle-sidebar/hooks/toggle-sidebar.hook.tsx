// Handlers
import { ToggleSidebarHandlers } from "../handlers/toggle-sidebar.handlers";
// Types
import type {
  ToggleSidebarHookProps,
  ToggleSidebarHookReturn,
} from "./types/toggle-sidebar.hook.types";

const ToggleSidebarHook = ({
  setOpenSidebar,
}: ToggleSidebarHookProps): ToggleSidebarHookReturn => {
  const { handleToggleSidebarButtonClick } = ToggleSidebarHandlers({
    setOpenSidebar,
  });

  return {
    handleToggleSidebarButtonClick,
  };
};

export { ToggleSidebarHook };

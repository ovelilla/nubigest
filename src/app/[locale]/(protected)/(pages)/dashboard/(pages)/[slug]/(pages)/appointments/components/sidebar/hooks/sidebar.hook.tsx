// Handlers
import { SidebarHandlers } from "../handlers/sidebar.handlers";
// Types
import type {
  SidebarHookProps,
  SidebarHookReturn,
} from "./types/sidebar.hook.types";

const SidebarHook = ({
  calendarRef,
  setOpenSidebar,
}: SidebarHookProps): SidebarHookReturn => {
  const { handleContentClick, handleDateSelect, handleOverlayClick } =
    SidebarHandlers({
      calendarRef,
      setOpenSidebar,
    });

  return {
    handleContentClick,
    handleDateSelect,
    handleOverlayClick,
  };
};

export { SidebarHook };

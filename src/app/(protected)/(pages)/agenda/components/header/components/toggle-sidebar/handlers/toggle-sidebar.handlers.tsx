// Types
import type {
  ToggleSidebarHandlersProps,
  ToggleSidebarHandlersReturn,
  ToggleSidebarButtonClickHandlerProps,
} from "./types/toggle-sidebar.handlers.types";

const toggleSidebarButtonClickHandler = ({
  setOpenSidebar,
}: ToggleSidebarButtonClickHandlerProps): void => {
  setOpenSidebar((state) => !state);
};

const ToggleSidebarHandlers = ({
  setOpenSidebar,
}: ToggleSidebarHandlersProps): ToggleSidebarHandlersReturn => {
  return {
    handleToggleSidebarButtonClick: () =>
      toggleSidebarButtonClickHandler({ setOpenSidebar }),
  };
};

export { ToggleSidebarHandlers };

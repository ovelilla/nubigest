// Types
import type { Dispatch, SetStateAction } from "react";
import type { ToggleSidebarHandlersReturn } from "../../handlers/types/toggle-sidebar.handlers.types";

type ToggleSidebarHookProps = {
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

type ToggleSidebarHookReturn = ToggleSidebarHandlersReturn;

export type { ToggleSidebarHookProps, ToggleSidebarHookReturn };

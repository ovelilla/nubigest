// Types
import type { Dispatch, SetStateAction } from "react";

type ToggleSidebarHandlersProps = {
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

type ToggleSidebarHandlersReturn = {
  handleToggleSidebarButtonClick: () => void;
};

type ToggleSidebarButtonClickHandlerProps = Pick<
  ToggleSidebarHandlersProps,
  "setOpenSidebar"
>;

export type {
  ToggleSidebarHandlersProps,
  ToggleSidebarHandlersReturn,
  ToggleSidebarButtonClickHandlerProps,
};

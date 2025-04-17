// Types
import {
  ContextSwitcherHandlersProps,
  CreateOrganizationHandlerProps,
} from "./types/context-switcher.handlers.types";

const createOrganizationeHandler = ({
  setOpenDialog,
}: CreateOrganizationHandlerProps) => {
  setOpenDialog(true);
};

const ContextSwitcherHandlers = ({
  setOpenDialog,
}: ContextSwitcherHandlersProps) => ({
  handleCreateOrganization: () => createOrganizationeHandler({ setOpenDialog }),
});

export { ContextSwitcherHandlers };

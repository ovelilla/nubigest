// Types
import type { Dispatch, SetStateAction } from "react";

type ContextSwitcherHandlersProps = {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

type CreateOrganizationHandlerProps = Pick<
  ContextSwitcherHandlersProps,
  "setOpenDialog"
>;

export type { ContextSwitcherHandlersProps, CreateOrganizationHandlerProps };

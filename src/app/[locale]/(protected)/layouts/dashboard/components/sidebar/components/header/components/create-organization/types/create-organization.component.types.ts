// Types
import type { Dispatch, SetStateAction } from "react";

type CreateOrganizationProps = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

export type { CreateOrganizationProps };

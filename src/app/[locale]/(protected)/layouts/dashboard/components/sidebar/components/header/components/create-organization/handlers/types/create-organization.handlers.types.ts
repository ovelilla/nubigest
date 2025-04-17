// Types
import type { Dispatch, SetStateAction } from "react";
import type { CreateOrganizationSchema } from "../../schemas/types/create-organization.schema.types";
import type { UseFormReturn } from "react-hook-form";

type CreateOrganizationHandlersProps = {
  form: UseFormReturn<CreateOrganizationSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  t: (arg: string) => string;
};

type CreateOrganizationHandlersReturn = {
  handleOpenChange: (open: boolean) => void;
  handleSubmit: (values: CreateOrganizationSchema) => void;
};

type OpenChangeHandlerProps = Pick<
  CreateOrganizationHandlersProps,
  "form" | "setOpenDialog"
> & {
  open: boolean;
};

type SubmitHandlerProps = Pick<
  CreateOrganizationHandlersProps,
  "form" | "setLoading" | "setOpenDialog" | "t"
> & {
  values: CreateOrganizationSchema;
};

export type {
  CreateOrganizationHandlersProps,
  CreateOrganizationHandlersReturn,
  OpenChangeHandlerProps,
  SubmitHandlerProps,
};
